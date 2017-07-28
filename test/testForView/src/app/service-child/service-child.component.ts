import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../service/shared.service";

@Component({
  selector: 'app-service-child',
  template: `
    <div>
      <input [(ngModel)]="list">
      <input type="button" (click)="add()" value="Clickme">
    </div>
  `,
  styleUrls: ['./service-child.component.css']
})
export class ServiceChildComponent implements OnInit {
  private list: string = "Testing Data";
  constructor(private sharedService: SharedService) { }

  ngOnInit() {

  }

  add() {
    this.sharedService.add(this.list);
    this.list = '';
  }

}
