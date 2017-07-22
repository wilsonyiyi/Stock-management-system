import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit{
  ngAfterContentInit (): void {
    console.log(`父组件内容初始化完毕`)
  }

  ngAfterContentChecked (): void {
    console.log(`父组件内容变更检查完毕`)
  }

  ngAfterViewInit (): void {
    console.log(`父组件视图初始化完毕`)
  }

  ngOnInit (): void {

  }

}
