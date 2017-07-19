import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Stock} from "../stock/stock.component";
import {Injectable} from "@angular/core";
/**
 * Created by willwang on 2017/7/18.
 */

// resolve 在进入路由时准备好数据，对类进行初始化操作， 防止某些对象没有数据报错， 有点像window.onload的效果
@Injectable()
export class StockResolve implements Resolve<Stock> {
  constructor(private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Stock | Observable<Stock> | Promise<Stock>{
    let id = route.params["id"];
    console.log("id: ", id == 1)
    if (id == 1) {
      console.log(new Stock(1, "SMM"))
      return new Stock(1, "SMM")
    }else {
      this.router.navigate(['/home']);
      return undefined;
    }
  }
}
