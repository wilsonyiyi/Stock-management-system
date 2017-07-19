import { Component, OnInit } from '@angular/core';
import {Stock, StockService} from "../stock.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  stock: Stock;

  constructor(private router: ActivatedRoute, private stockService: StockService, private route: Router) { }

  ngOnInit() {
  	let id:number;
  	this.router.params.subscribe((param: Params) => {
  		id = param["id"]
	})
  	this.stock = this.stockService.getStock(id);
  }

  cancel() {
	this.route.navigateByUrl('/stock');
  }

  save() {
	this.route.navigateByUrl('/stock');
  }

}
