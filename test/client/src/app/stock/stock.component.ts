import { Component, OnInit } from '@angular/core';
import {Headers, Http} from "@angular/http";
import 'rxjs/Rx'
import {Observable} from "rxjs";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  dataSource: Observable<any>;

  private stocks: Observable<any>;

  constructor(private http: Http) {
    // 增加请求时头部限制，使用方法
    let myHeaders: Headers = new Headers();
    myHeaders.append("Authorization", "Basic 123456")

    this.stocks = this.http.get('/api/stock', {headers: myHeaders}).map(response => response.json());
  }

  ngOnInit() {
    // this.dataSource.subscribe(
    //   data => {
    //     this.stocks = data
    //   }
    // )
  }

}
