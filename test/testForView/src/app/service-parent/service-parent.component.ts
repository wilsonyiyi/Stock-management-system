import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../service/shared.service";

@Component({
  selector: 'app-service-parent',
  template: `
    <app-service-child></app-service-child>
    <div>
      <span *ngFor="let list of lists">{{list}}</span>
    </div>
  `,
  styleUrls: ['./service-parent.component.css'],
  providers: [SharedService]
})
export class ServiceParentComponent implements OnInit {
  private lists: string[] = [];
  constructor(private sharedService: SharedService ) { }

  ngOnInit() {
    this.lists = this.sharedService.lists
  }

}
