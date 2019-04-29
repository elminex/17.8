const http = require('http');
const fs = require('fs')
let server = http.createServer();
server.on('request', (request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (request.method === 'GET' && request.url === '/') {
        let index = fs.readFileSync('./index.html');
        response.write(index);
        response.end();
    } else {
        let image = fs.readFileSync('./puppy.png');
        response.writeHead(200, { 'Content-Type': 'image/png' });
        response.statusCode = 404;
        response.write(image);
        response.end();
    }
});

server.listen(8080);