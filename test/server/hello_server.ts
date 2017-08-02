import * as http from "http"

const server = http.createServer((request, response) => {
    response.end("hello world");
});

server.listen(8000);