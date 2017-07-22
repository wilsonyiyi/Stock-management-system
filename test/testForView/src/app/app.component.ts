import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  ngAfterViewChecked (): void {
    console.log('父组件的视图变更完毕')
  }

  ngAfterViewInit (): void {
    console.log('父组件的视图初始化完毕')
  }

  @ViewChild('child1')
  child: ChildComponent;

  ngOnInit (): void {
    this.child.greeting('wang')
  }


}
