import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag3',
  templateUrl: './drag3.component.html',
  styleUrls: ['./drag3.component.css', '../../assets/css/example.css']
})
export class Drag3Component implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  public clicked:any = {
    'one': false,
    'two': false,
    'three': false,
    'four': false,
    'five': false,
    'six': false,
    'seven': false
  };

  public onclick(key:any):void {
    this.clicked[key] = true;
    setTimeout(() => {
      this.clicked[key] = false;
    }, 2000);
  }

}
