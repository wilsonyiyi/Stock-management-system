
import {CanDeactivate} from "@angular/router";
import {StockComponent} from "../stock/stock.component";
/**
 * Created by willwang on 2017/7/18.
 */

// 离开路由守卫， 判断用户是否关注，响应行为
export class FocusGuard implements CanDeactivate<StockComponent> {
  canDeactivate(component: StockComponent) {
    if (component.isFocus()) {
      return true;
    }else {
      return window.confirm("确定不关注这只牛股吗？")
    }
  }
}
