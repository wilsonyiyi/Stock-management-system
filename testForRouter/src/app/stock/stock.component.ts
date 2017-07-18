import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  
  private stockId: number;

  private isPro: boolean;

  constructor(private routing: ActivatedRoute) { 
    this.routing.params.subscribe((params: Params) => {
      this.stockId = params["id"]
    })
  }

  ngOnInit() {
    // this.stockId = this.routing.snapshot.queryParams["id"]
    // this.stockId = this.routing.snapshot.params["id"]

    // 订阅者模式
    // this.routing.params.subscribe((params: Params) => {
    //   this.stockId = params["id"]
    // })

    this.isPro = this.routing.snapshot.data[0]["isPro"]
  }

}
