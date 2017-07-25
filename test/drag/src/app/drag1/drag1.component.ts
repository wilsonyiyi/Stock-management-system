import { Component, OnInit } from '@angular/core';
import {DragulaService} from "ng2-dragula";

@Component({
  selector: 'app-drag1',
  templateUrl: './drag1.component.html',
  styleUrls: ['./drag1.component.css']
})
export class Drag1Component implements OnInit {

  constructor(private dragularService: DragulaService) { }

  ngOnInit() {
    this.dragularService.drag.subscribe((value) => {
      console.log(`drag: ${value[0]}`)
      this.onDrag(value.slice(1))
    })
  }

  private onDrag(args) {
    let [e, el] = args;
    // do something
  }

  private onDrop(args) {
    let [e, el] = args;
    // do something
  }

  private onOver(args) {
    let [e, el, container] = args;
    // do something
  }

  private onOut(args) {
    let [e, el, container] = args;
    // do something
  }

}
