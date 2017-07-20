import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent implements OnInit {
  @Input() private keyword: string;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.keyword = 'xxx'
    }, 3000)
  }

}
