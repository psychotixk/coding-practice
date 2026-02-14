

import express from 'express';
import { error } from 'node:console';


const app = express();
const PORT = 8000;




const DIARY = {};
const EMAILS = new Set();



//? Middlewares
app.use(express.json());


//? Routes

// hey, here is my car - please park it and give me back a token?
// Email => unique car number (in this example)
app.post('/signup', (req, res) => {
    const {name, email, password} = req.body;

    if(EMAILS.has(email)){
        return res.status(400).json({error: 'Email is already taken'});
    }

    // create a token for user
    const token = `${Date.now()}`;

    // Do a entry in diary
    DIARY[token] = {name, email, password};
    EMAILS.add(email);
    
    return res.status(200).json({status: 'Success', token});

});




app.post('/me', (req, res) => {
    const { token } = req.body;

    if(!token) return res.status(400).json({error: 'Missing Token'});

    if (!(token in DIARY)) return res.status(400).json({error: 'Invalid Token'});

    const entry = DIARY[token]

    return res.json({data: entry});

})


app.post('/private-data', (req, res) => {
    const { token } = req.body;
    if (!token) return res.status(400).json({error: 'Missing Token'});
    if(!(token in DIARY)) return res.status(400).json({error: 'Invalid Token'});

    const entry = DIARY[token];
    return res.json({data: {privateData: 'Access Granted'}});

})






//? server listening
app.listen(PORT, ()=> console.log(`Server is listening on port: ${PORT}`));