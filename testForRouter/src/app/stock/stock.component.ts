import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  private stock: Stock;

  private isPro: boolean;

  // focus 是否关注
  private focus: boolean = false;

  constructor(private routing: ActivatedRoute) {
    this.routing.params.subscribe((params: Params) => {
      this.stock.id = params["id"]
    })
  }

  ngOnInit() {
    // this.stockId = this.routing.snapshot.queryParams["id"]
    // this.stockId = this.routing.snapshot.params["id"]

    // 订阅者模式
    // this.routing.params.subscribe((params: Params) => {
    //   this.stockId = params["id"]
    // })

    // 这里怎么说明白啊
    // resolve 路由守卫， 刚进入时做了判断处理的情况
    // 对能正常进入的，给予了初始值， 这里通过data属性获取这个初始值， 需要注意这里的书写方法
    this.routing.data.subscribe((data: {stock: Stock}) => {
      this.stock = data.stock
    })
    this.isPro = this.routing.snapshot.data[0]["isPro"]
  }

  isFocus() {
    return this.focus;
  }
}

export class Stock {
  constructor(public id: number, public name: string){}
}
