const express = require('express');
const { Interface } = require('node:readline');

const app = express();
const port = 8000

app.get('/', (req, res) => {
    res.end('Homepage');
});

app.get('/contact-us', (req, res) => {
    res.end("Contact me on: sumansenpai@gmail.com")
});

app.post('/tweets', (req, res) => {
    res.status(201).end("tweets created");
});

app.get('/tweets', (req, res) => {
    res.end("Here are your tweets")
});



//?  Server listening
app.listen(port, () => {
    console.log(`Your server is running on port: ${port}`);
});





