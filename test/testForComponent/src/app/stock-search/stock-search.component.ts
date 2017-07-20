import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent implements OnInit {
  @Input() private keyword: string;

  public price: number;

  @Output()
  public searchResult: EventEmitter<StockInfo> = new EventEmitter(); // 股票查询结果

  @Output()
  public addCart: EventEmitter<StockInfo> = new EventEmitter(); // 添加到购物车

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      let stockInfo: StockInfo = new StockInfo(this.keyword, 100 * Math.random());
      this.price = stockInfo.price;
      this.searchResult.emit(stockInfo);
    }, 3000)
  }

  buyStock() {
    this.addCart.emit(new StockInfo(this.keyword, this.price));
  }

}

export class StockInfo {
  constructor(public name: string, public price: number){}
}
