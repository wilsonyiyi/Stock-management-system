import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable()
export class StockService {

  constructor(public loggerService: LoggerService) { }

  getStock(): Stock {
    this.loggerService.log("在stock服务中成功注入了logger服务。。。");
    return new Stock(1, "SMM")
  }
}

export class Stock {
  constructor(public id: number, public name: string) {}
}
