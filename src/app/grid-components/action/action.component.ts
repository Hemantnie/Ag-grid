import { Component, OnDestroy} from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements ICellRendererAngularComp, OnDestroy {

  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  ngOnDestroy() {
    console.log(`Destroying ActionComponent`);
  }

  refresh(): boolean {
    return false;
  }

  displayROwData(){
    console.log("Make",this.params);

    console.log("Make",this.params.data.make);
    console.log("Model",this.params.data.model);
    console.log("Price",this.params.data.price); 
    console.log("set",this.params.data.set); 
    console.log("typeahead",this.params.data.typeahead); 

  }

}
