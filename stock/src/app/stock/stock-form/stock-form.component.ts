import { Component, OnInit } from '@angular/core';
import {Stock} from "../stock-manage/stock-manage.component";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  stock: Stock;

  constructor() { }

  ngOnInit() {
  	this.stock = new Stock(8, "第100只股票", 2.00, 4.1, "我是来描述第八只股票的", ["肥肉一坨", "该减肥了"]);
  }

}
