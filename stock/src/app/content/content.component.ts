import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pageTitle: string = "";
  pageDesc: string = "";

  constructor(public router: Router) {
  	//利用router的事件进行全局的控制
	  router.events
		.filter(event => event instanceof NavigationEnd)
		  .subscribe((event: NavigationEnd) => {
	  		if (event.url == '/dashboard') {
	  			this.pageTitle = "首页";
	  			this.pageDesc = "";
				}else if (event.url.startsWith('/stock')) {
						this.pageTitle = "股票信息管理";
						this.pageDesc = "进行股票信息管理"
				}
		  })
  }

  ngOnInit() {
  }

}
