import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ServiceParentComponent } from './service-parent/service-parent.component';
import { ServiceChildComponent } from './service-child/service-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ServiceParentComponent,
    ServiceChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
