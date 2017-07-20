import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input()
  private greeting: string;

  @Input()
  private  user: {name: string};

  private message: string = "初始化消息";

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges (changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

}
