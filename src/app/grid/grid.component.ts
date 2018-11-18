import { Component, OnInit } from '@angular/core';
import { ActionComponent } from '../grid-components/action/action.component';
import { DropdownComponent } from '../grid-components/dropdown/dropdown.component';
import { TypeaheadComponent } from '../grid-components/typeahead/typeahead.component';

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
      { headerName: 'Model', field: 'model' },
      { headerName: 'Typeahead', field: 'typeahead',cellRenderer:"typeahead" },
      { headerName: 'DropAndSet', field: 'set',cellRenderer:"dropdown" },
      { headerName: 'Actions', field: 'action',cellRenderer:"actionRender" }
    ];

    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000,set:'EU' },
      { make: 'Ford', model: 'Mondeo', price: 32000,set:'EU' },
      { make: 'Porsche', model: 'Boxter', price: 72000,set:'EU' }
    ];


    this.context = { componentParent: this };

    this.frameworkComponents = {
      // squareRenderer: SquareRenderer,
      actionRender:ActionComponent,
      dropdown:DropdownComponent,
      typeahead:TypeaheadComponent
      
    };

  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }

}
