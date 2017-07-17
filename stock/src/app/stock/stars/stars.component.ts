import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input() rating: number = 0; // 接收父组件传递值

  public stars: boolean[];
  
  constructor() {
  }

  ngOnInit() {
    // 生成一个boolean数组， 返回stars
    // 实星返回false， 空星返回true
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      // 非常好的实现方式
      this.stars.push( i > this.rating);    
    }
    
  }

}
