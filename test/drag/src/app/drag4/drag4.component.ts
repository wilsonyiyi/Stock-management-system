import { Component, OnInit } from '@angular/core';
import {DragulaService} from "ng2-dragula";

@Component({
  selector: 'app-drag4',
  templateUrl: './drag4.component.html',
  styleUrls: ['./drag4.component.css', '../../assets/css/example.css']
})
export class Drag4Component implements OnInit {
  ngOnInit (): void {
  }

  public many:Array<string> = ['The', 'possibilities', 'are', 'endless!'];
  public many2:Array<string> = ['Explore', 'them'];

  public constructor(private dragulaService:DragulaService) {
    console.log(dragulaService.dropModel)

    /*
    * TODO
    * dropModel， 能实现数组的排序功能
    * 每次拖放完成时做一次和后台的交互处理， 然后获取新的排序数据
    * */
    dragulaService.dropModel.subscribe((value:any) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value:any) => {
      this.onRemoveModel(value.slice(1));
    });
  }

  private onDropModel(args:any):void {
    let [el, target, source] = args;
    console.log('onDropModel:');
    console.log(el);
    console.log(target);
    console.log(source);
  }

  private onRemoveModel(args:any):void {
    let [el, source] = args;
    console.log('onRemoveModel:');
    console.log(el);
    console.log(source);
  }

}
