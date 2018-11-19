import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular';
import { BsDropdownModule,TypeaheadModule,BsDatepickerModule} from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { DropdownComponent } from './grid-components/dropdown/dropdown.component';
import { ActionComponent } from './grid-components/action/action.component';
import { TypeaheadComponent } from './grid-components/typeahead/typeahead.component';
import { DateComponent } from './grid-components/date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    DropdownComponent,
    ActionComponent,
    TypeaheadComponent,
    DateComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([
      ActionComponent,
      DropdownComponent,
      TypeaheadComponent,
      DateComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
