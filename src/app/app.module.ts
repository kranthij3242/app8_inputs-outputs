import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicinputsandoutputsComponent } from './basicinputsandoutputs/basicinputsandoutputs.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicinputsandoutputsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
