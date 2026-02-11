// import http from 'http';
const http = require('http');
const { url } = require('inspector');


const server = http.createServer((req, res) => {
    console.log("I got an incomming request.");
    // db operations ...

    res.writeHead(200)
    res.end("Thankss for visiting my server");
});



server.listen(8000, function() {
    console.log('HTTP serveri is up and running on port 8000')
})


