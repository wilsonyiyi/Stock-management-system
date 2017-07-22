import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-red-border',
  templateUrl: './red-border.component.html',
  styleUrls: ['./red-border.component.css']
})
export class RedBorderComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit {
  ngAfterContentInit (): void {
    console.log(`子组件内容初始化完毕`)
  }

  ngAfterContentChecked (): void {
    console.log(`子组件内容变更检查完毕`)
  }

  ngAfterViewInit (): void {
    console.log(`子组件视图初始化完毕`)
  }

  @Input()
  private content: string;

  constructor() { }

  ngOnInit() {
  }

}
