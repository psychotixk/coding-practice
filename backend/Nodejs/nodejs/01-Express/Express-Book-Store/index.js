const dotenv = require('dotenv/config');
const express = require('express');

const { loggerMiddleware } = require('./middlewares/logger');

const bookRouter = require('./routes/book.routes');
const authorRouter = require('./routes/author.routes');


const app = express();
const PORT = 8000;


// middlewares (plugins)
app.use(express.json());
app.use(loggerMiddleware);



// Routes
app.use('/books', bookRouter);
app.use('/authors', authorRouter);


//  listening on port
app.listen(PORT, () => console.log(`Http server is running on PORT: ${PORT}`));
