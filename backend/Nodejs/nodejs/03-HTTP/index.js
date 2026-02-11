const http = require('node:http');
const fs = require('node:fs')

// creating server
const server = http.createServer((req, res) => {
    const method = req.method;
    const path = req.url;

    const log = `\n[${Date.now()}] ${method} ${path}`;
    fs.appendFileSync('log.txt', log, 'utf-8');
    switch (method) {
        case 'GET': 
        {
            switch(path) {
                case '/':
                    return res.writeHead(200).end('Hello from the server');

                case '/contact-us':
                    return res.writeHead(200).end(`Sure,Email: suman@s.com and phone no: +088`);

                case '/tweet':
                    return res.writeHead(200).end(`Tweet1\nTweet-2`);
            };
        }
        break
        case 'POST':{
            switch (path) {
                case '/tweet':
                    return res.writeHead(201).end(`Your tweet was created...`);
            };
        }
    };

    return res.writeHead(404).end(`You're lost man`);
});


// server listening on port 8000
server.listen(8000, () => {
    console.log(`Http server is listening on 8000`);
});

