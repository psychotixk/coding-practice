const express = require('express');

const bookRouter = require('./routes/book.routes')

const { loggerMiddleware } = require('./middlewares/logger');

const app = express();
const PORT = 8000;


// middlewares (plugins)
app.use(express.json());
app.use(loggerMiddleware);



// Routes
app.use('/books', bookRouter);



//  listening on port
app.listen(PORT, () => console.log(`Http server is running on PORT: ${PORT}`));
