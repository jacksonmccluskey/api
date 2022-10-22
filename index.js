const fs = require('fs');
const http = require('http');

// SERVER

const server = http.createServer((req, res) => {
    res.end('hello from server')
})

const port = 8888;

server.listen(port, '127.0.0.1', () => {
    console.log(`listening to request on port ${port}`)
})