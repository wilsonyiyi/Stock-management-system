import { Component } from '@angular/core';
import {StockInfo} from "./stock-search/stock-search.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // private search: string;
  // private price: number;
  // stockInfo: StockInfo;

  // searchResultHandler(stockInfo: StockInfo) {
  //   this.price = stockInfo.price;
  // }

  // 添加到购物车
  // addCartHandler(stockInfo: StockInfo) {
  //   console.log(stockInfo);
  //
  //   this.stockInfo = stockInfo;
  // }

  /*
  * 生命周期钩子
  * */
  // private title: string = '哈哈'

  private greeting: string = 'Hello';
  private user: {name: string} = {name: 'wang'};
  private message: string = "父组件初始化消息"
}
