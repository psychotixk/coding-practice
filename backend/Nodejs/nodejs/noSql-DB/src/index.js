import 'dotenv/config';
import express from 'express';
import { connectMongoDB } from './configs/db.js';
import userRouter from './routes/user.routes.js'
import { authMiddleware } from '../middlewares/auth.middleware.js';



const app = express();
const PORT = process.env.PORT ?? 8000;


    //? Connecting to monogDB
connectMongoDB(process.env.MONGODB_URL).then(()=> console.log(`MongoDB Connected`));


    //? Middlewares
    app.use(express.json());
    app.use(authMiddleware);

    //? Routes
    app.use('/user', userRouter);



    //? server listening
app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`));

