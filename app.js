const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-type": "text/html" });
    fs.readFile("./index.html", null, (error, data) => {
        if (error) {
            throw error;
        }
        response.write(data);
        response.end();
    });
});

server.listen(5678, () => {
    console.log("서버 도는중 5678");
});
