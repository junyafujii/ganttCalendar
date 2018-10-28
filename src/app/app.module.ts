import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    FullCalendarComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
