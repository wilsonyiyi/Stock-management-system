import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';
import {SellerListComponent} from "./stock/seller-list/seller-list.component";
import {BuyerListComponent} from "./stock/buyer-list/buyer-list.component";
import {ConsultComponent} from "./consult/consult.component";
// import {PermissionGuard} from "./guard/permission.guard";
// import {FocusGuard} from "./guard/focus.guard";
import {StockResolve} from "./guard/stock.resolve";


// canActivate: [PermissionGuard],
// canDeactivate: [FocusGuard]


const routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'consult', component: ConsultComponent, outlet: 'aux'},
  {
    path: 'stock/:id', component: StockComponent, data: [{isPro: true}],
    children: [
      {path: '', component: BuyerListComponent},
      {path: 'seller/:sellerId', component: SellerListComponent}
    ],
    resolve: {
      stock: StockResolve
    }
  },
  {path: '**', component: Code404Component}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
