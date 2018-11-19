import { Component, OnDestroy} from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import * as moment from 'moment';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements ICellRendererAngularComp, OnDestroy {

  private params: any;
  private bsRangeValue:any;
  agInit(params: any): void {
    this.params = params;
    this.bsRangeValue=params.data.date;
  }

  ngOnDestroy() {
    console.log(`Destroying DateComponent`);
  }

  refresh(): boolean {
    return false;
  }

  openDatePicker(){
    console.log("Date Picker");
    
  }

  onValueChange(value: Date): void {
    // this.bsValue=moment(value).format('L');
    this.params.setValue(moment(value).format('L'));
    console.log(value);
    
  }


}
