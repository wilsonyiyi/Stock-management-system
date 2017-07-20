import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { StockCartComponent } from './stock-cart/stock-cart.component';
import { LifeComponent } from './life/life.component';
import { TestPipe } from './test.pipe';
import { TestComponent } from './test/test.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    StockSearchComponent,
    StockCartComponent,
    LifeComponent,
    TestPipe,
    TestComponent,
    ChildComponent
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
