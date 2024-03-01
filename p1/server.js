const http = require('http');
const fs = require('fs');
const url = require('url');
const { parse } = require('querystring');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.method === 'POST') {
        if (req.url === '/upload') {
            // For simplicity, we're not actually uploading a file.
            // We're just simulating the action and response.
            fs.writeFile('destination.txt', 'FS worked successfully', (err) => {
                if (err) {
                    res.writeHead(500);
                    return res.end('Error writing file');
                }
                myEmitter.emit('fileUploaded');
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('File uploaded and message written to destination.txt');
            });
        } else if (req.url === '/parse-url') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString(); // Convert Buffer to string.
            });
            req.on('end', () => {
                const parsedBody = parse(body);
                const parsedUrl = new URL(parsedBody.url);
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(`Parsed URL:\nHost: ${parsedUrl.host}\nPathname: ${parsedUrl.pathname}\nSearch Params: ${parsedUrl.search}`);
            });
        }
    }
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

myEmitter.on('fileUploaded', () => {
    console.log('A file was uploaded and processed.');
});
