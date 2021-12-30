import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContadorComponent } from './contador/contador.component';



@NgModule({
  declarations: [
    ContadorComponent

  ],
  exports: [

    ContadorComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ContadorComponent]
})
export class ContadorModule { }
