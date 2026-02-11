

const http = require('node:http');

const server = http.createServer((req, res) => {
//    console.log(`Incoming request at [${Date.now()}]`);
//    console.log(req.url)
    // res.writeHead(200);
    // return res.end('Contact me at sumansenpai@gmail.com')

    switch(req.url) {
        case '/' :
            res.writeHead(201)
            return res.end(`Homepage`);
        case '/contact-us':
            res.writeHead(201)
            return res.end(`Contact me at: sumansenpai@gmail.com`);
        case '/about':
            res.writeHead(201)
            return res.end(`I'm a software engineer`);
        default:
            res.writeHead(404);
            res.end(`You're lost.....`)
    }

//    res.end(`hey, you can accept ${req.headers['accept-language']}`)
});

server.listen(8000, () => {
    console.log("Server is running on port 8000");
});