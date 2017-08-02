import * as express from "express";

const app = express();

app.get('/', (request, response) => {
   response.send("这里是首页")
});
app.get('/api/stock', (request, response) => {
    response.json(stocks)
});
app.get('/api/stock/:id', (request, response) => {
    response.json(stocks.find(stock => stock.id == request.params.id))
});

const server = app.listen(8080, 'localhost', () => {
    console.log("serving... at http://localhost:8080")
});



export class Stock {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public rating: number,
        public desc: string,
        public categories: Array<string>
    ) {}
}

const stocks: Stock[] = [
    new Stock(1, "第一只股票", 1.00, 3.1, "我是来描述第一只股票的", ["SMM", "铜金属"]),
    new Stock(2, "第二只股票", 4.00, 2.1, "我是来描述第二只股票的", ["淘宝随机数", "铝金属"]),
    new Stock(3, "第三只股票", 7.00, 4.1, "我是来描述第三只股票的", ["阿里巴巴", "镍金属"]),
    new Stock(4, "第四只股票", 20.00, 5.1, "我是来描述第四只股票的", ["百度集团", "了不起的公司"]),
    new Stock(5, "第五只股票", 12.00, 1.1, "我是来描述第五只股票的", ["碧桂园", "买房子的"]),
    new Stock(6, "第六只股票", 3.00, 0.1, "我是来描述第六只股票的", ["卖房子的", "安徽理工"]),
    new Stock(7, "第七只股票", 6.00, 3.1, "我是来描述第七只股票的", ["美国人民", "世界和平"]),
    new Stock(8, "第八只股票", 2.00, 4.1, "我是来描述第八只股票的", ["肥肉一坨", "该减肥了"]),
];