import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private items: Items = new Items('Niweisi');
  constructor() { }

  ngOnInit() {
    console.log("test :", this.items)
  }

}


export class Items {
  constructor(private name: string) {}
}
