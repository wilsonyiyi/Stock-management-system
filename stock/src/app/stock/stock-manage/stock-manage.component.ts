import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Stock, StockService} from "../stock.service";
import 'rxjs/Rx';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  public stocks: Array<Stock>;

  // formControl, 搜索响应式编程
  public nameField: FormControl = new FormControl();

  constructor(public router: Router, private stockService: StockService) { }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
  }

  create(){
  	this.router.navigateByUrl('/stock/0')
  }

  update(stock: Stock) {
  	this.router.navigateByUrl('/stock/' + stock.id)
  }
}

