const fs = require('fs');
const http = require('http');
const url = require('url');

// SERVER

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/engineering') {
        res.end('hello from engineering');
    } else if (pathName === '/product') {
        res.end('hello from product');
    } else if (pathName === '/design') {
        res.end('hello from design');
    } else if (pathName === '/business') {
        res.end('hello from business');
    } else if (pathName === '/ai') {
        res.end('hello from ai');
    } else {
        res.end('hello from organization');
    }
});

const port = 8888;

server.listen(port, '127.0.0.1', () => {
    console.log(`listening to request on port ${port}`);
});