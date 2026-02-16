import express from "express";
import { User } from '../models/user.model.js'
import argon2 from "argon2";
import jwt from 'jsonwebtoken';
import { requireAuth } from "../../middlewares/auth.middleware.js";


const router = express.Router();



router.post('/signup', async(req, res) => {
    const {name, email, password} = req.body;

    const existingUser = await User.findOne({
        email,
    });

    //  checking if email already exists
    if (existingUser) {
        return res.status(400).json({error: `User with email: ${email} already exists.`})
    }

    //  creating a hashed version of password
    const hashPassword = await argon2.hash(password);

    const user = await User.create({
        name,
        email,
        password: hashPassword,
    });

    return res.status(201).json({ status: `Sucess`, data: {id: user._id}})
});





router.post('/login', async(req, res) =>{
    const { email, password } = req.body;

    const user = await User.findOne({
        email,
    });

    //  checking if email already exists
    if (!user) {
        return res.status(400).json({error: `User with email: ${email} does not exists.`})
    }

    const isPasswordValid = await argon2.verify(user.password, password);     

    //  checking if password is valid
    if (!isPasswordValid) {
        return res.status(401).json({error: `Invalid credentials`});
    }

    //  creating jwt payload
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
    }

    //  creating jwt token
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    return res.json({ status: `Successfully Logged in....`, token});
});

router.patch('/', requireAuth, async(req, res) => {
    const { name }= req.body;

    await User.findByIdAndUpdate(req.user.id, {
        name,
    })

    return res.json({status: `Successfuly updated`})
})


export default router;
