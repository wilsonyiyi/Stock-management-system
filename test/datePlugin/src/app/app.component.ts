import { Component } from '@angular/core';
// import { INglDatatableSort, INglDatatableRowClick } from 'ng-lightning/ng-lightning';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`ngl-datepicker { width: 310px; }`]
})
export class AppComponent {

  // 日历插件
  dayNamesShort = ["日", "一", "二", "三", "四", "五", "六"];
  monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

  date: Date;

  gotoDate() {
    this.date = new Date(2005, 10, 9);
  }
}
