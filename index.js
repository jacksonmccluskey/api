const fs = require('fs');
const http = require('http');
const url = require('url');

// SERVER

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/engineering' || pathName === '/') {
        res.end('hello from engineering');
    } else if (pathName === '/product') {
        res.end('hello from product');
    } else if (pathName === '/design') {
        res.end('hello from design');
    } else if (pathName === '/business') {
        res.end('hello from business');
    } else if (pathName === '/ai') {
        res.end('hello from ai');
    } else if (pathName === '/api') {
        fs.readFile(`${__dirname}/data/patient.json`, 'utf-8', (err, data) => {
            const patientData = JSON.parse(data);
            console.log(patientData);
        })
        res.end('api')  
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