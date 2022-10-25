const fs = require('fs');
const http = require('http');
const url = require('url');

// SERVER

const data = fs.readFileSync(`${__dirname}/data/patient.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/engineering' || pathName === '/') {
        res.end('hello from engineering');
    } else if (pathName === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'Jax-header': 'mccluskey'
        });
        res.end('<h1>there has been an error</h1>');
    }
});

const port = 8888;

server.listen(port, '127.0.0.1', () => {
    console.log(`listening to request on port ${port}`);
});