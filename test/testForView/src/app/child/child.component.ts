import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit, AfterViewChecked {
  ngAfterViewChecked (): void {
    console.log('子组件的视图变更完毕')
  }

  ngAfterViewInit (): void {
    console.log('子组件的视图初始化完毕')
  }
  constructor() { }

  ngOnInit() {
  }

  // 实现：父组件调用该子组件上的方法
  greeting(name:string) {
    console.log(`Hello ${name}`)
  }
}
