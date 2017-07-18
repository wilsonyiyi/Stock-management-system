import {CanActivate} from "@angular/router";
/**
 * Created by willwang on 2017/7/18.
 */

// 路由进入时权限判断
export class PermissionGuard implements CanActivate {
  canActivate() {

    // true 可以进路由， false不能进入路由
    let hasPermission: boolean  = Math.random() < 0.5;
    if (!hasPermission) {
      console.log("用户无权访问此股票行情！")
    }
    return hasPermission;
  }
}
