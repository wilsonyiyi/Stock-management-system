import * as express from "express";

const app = express();

app.get('/', (request, response) => {
   response.send("这里是首页")
});
app.get('/stock', (request, response) => {
    response.send("接收到股票查询请求")
});

const server = app.listen(8080, 'localhost', () => {
    console.log("serving... at http://localhost:8080")
});