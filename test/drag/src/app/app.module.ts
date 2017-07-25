import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// dnd模块
import { DragulaModule } from "ng2-dragula";

import { AppComponent } from './app.component';
import { Drag1Component } from './drag1/drag1.component';
import { Drag2Component } from './drag2/drag2.component';

@NgModule({
  declarations: [
    AppComponent,
    Drag1Component,
    Drag2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
