import { Pipe, PipeTransform } from '@angular/core';
import {Stock} from "./stock.service";

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(list: Stock[], field: string, search: string): any {
    if (!field || !search) return list;
    return list.filter(item => {
      let itemFieldValue = item[field];
      return itemFieldValue.indexOf(search) > -1
	  })
  }

}
