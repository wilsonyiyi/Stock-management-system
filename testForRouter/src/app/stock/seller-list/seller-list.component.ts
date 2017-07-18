import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {

  private sellerId: number;

  constructor(private routing: ActivatedRoute) { }

  ngOnInit() {
    // 如何获取PATH里的stockId的值呢？ 结论： 获取不了！
    // 这个组件只能获取自己定义的路由里的参数
    this.routing.params.subscribe((params: Params) => {
      this.sellerId = params["sellerId"]
    })
  }

}
