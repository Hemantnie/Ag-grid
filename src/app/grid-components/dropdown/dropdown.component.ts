import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements ICellRendererAngularComp {

  private params: any;
  private value: any;


  agInit(params: any): void {
    this.params = params;
    this.value=params.data.set;
  }

  ngOnDestroy() {
    console.log(`Destroying DropdownComponent`);
  }

  refresh(): boolean {
    return false;
  }

  handleSelection(data){
    this.value=data;
    this.params.setValue(data);
  }

}
