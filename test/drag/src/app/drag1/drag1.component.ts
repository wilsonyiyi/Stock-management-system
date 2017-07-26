import { Component, OnInit } from '@angular/core';
import {DragulaService} from "ng2-dragula";

@Component({
  selector: 'app-drag1',
  templateUrl: './drag1.component.html',
  styleUrls: ['./drag1.component.css', '../../assets/css/example.css']
})
export class Drag1Component implements OnInit {
    ngOnInit (): void {
    }

  constructor(private dragulaService: DragulaService) {
    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
      console.log(`onDraging...`)
    });
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
      console.log(`onDroping...`)
      // do something at this field

    });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
      console.log(`onOvering...`)
    });
    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
      console.log(`onOuting...`)
    });
  }

  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    // console.log("el: ", el)
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

  private onDrag(args) {
    let [e, el] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args) {
    let [e, el, container] = args;
    console.log(e.childNodes)
    this.addClass(e, 'ex-moved');
  }

  private onOver(args) {
    let [e, el, container] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args) {
    let [e, el, container] = args;
    this.removeClass(el, 'ex-over');
  }

}
