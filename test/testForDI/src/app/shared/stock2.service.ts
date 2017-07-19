import { Injectable } from '@angular/core';
import {Stock, StockService} from "./stock.service";
import {LoggerService} from "./logger.service";

@Injectable()
export class Stock2Service implements StockService{
  loggerService: LoggerService;
  getStock (): Stock {
    return new Stock(2, "SMM2");
  }

  constructor() { }

}
