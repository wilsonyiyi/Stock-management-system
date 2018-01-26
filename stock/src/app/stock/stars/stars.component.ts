import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
	@Input() rating: number = 0; // 接收父组件传递值

  @Input() private readOnly: boolean = true;

  @Output()
  public clickRating: EventEmitter<number> = new EventEmitter();

  public stars: boolean[];

  constructor() {
  }

  ngOnInit() {

  }
  
  /**
   * ngOnchanges 钩子，在输入属性发生变化时，会被自动调起
   */ 
  ngOnChanges (changes: SimpleChanges): void {
	  // 生成一个boolean数组， 返回stars
	  // 实星返回false， 空星返回true
	  this.stars = [];
	  for (let i = 1; i <= 5; i++) {
		  // 非常好的实现方式
		  this.stars.push( i > this.rating);
	  }
  }

  confirmStar(index) {
  	if (!this.readOnly) {
      // 修改输入属性， angular会调用ngOnChanges钩子函数
      this.rating = index + 1;
      // 通知父组件
  	  this.clickRating.emit(this.rating);
	  }
  }

}
