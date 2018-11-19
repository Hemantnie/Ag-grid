import { Component, OnInit } from '@angular/core';
import { ActionComponent } from '../grid-components/action/action.component';
import { DropdownComponent } from '../grid-components/dropdown/dropdown.component';
import { TypeaheadComponent } from '../grid-components/typeahead/typeahead.component';
import { DateComponent } from '../grid-components/date/date.component';
import * as moment from 'moment';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  private rowData: any[];

  private columnDefs;
  // private rowData;
  private context;
  private frameworkComponents;




  constructor() { }

  ngOnInit() {
    this.columnDefs = [
      { headerName: 'Make', field: 'make' },
      { headerName: 'Typeahead', field: 'typeahead',cellRenderer:"typeahead" },
      { headerName: 'DropAndSet', field: 'set',cellRenderer:"dropdown" },
      { headerName: 'Date', field: 'date',cellRenderer:"dateRender"},
      { headerName: 'Actions', field: 'action',cellRenderer:"actionRender" }
    ];

    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 ,date:moment(new Date()).format('L')},
      { make: 'Ford', model: 'Mondeo', price: 32000,set:'EU',date:moment(new Date()).format('L') },
      { make: 'Porsche', model: 'Boxter', price: 72000,set:'EU',date:moment(new Date()).format('L') }
    ];


    this.context = { componentParent: this };

    this.frameworkComponents = {
      // squareRenderer: SquareRenderer,
      actionRender:ActionComponent,
      dropdown:DropdownComponent,
      typeahead:TypeaheadComponent,
      dateRender:DateComponent
      
    };

  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }

}
