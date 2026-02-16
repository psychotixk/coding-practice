import jwt from 'jsonwebtoken';


/**
 * @param {string} token
 * @param {string} secret
 * @returns {[Error | null, object | null]}
 */
const verifyToken = (token, secret) => {
    try {
        return [null, jwt.verify(token, secret)];
    } catch (error) {
        return [error, null];
    }
};


export const authMiddleware = (req, res, next) => {

    const tokenHeader = req.headers['authorization'];

    if (!tokenHeader) {
        return next();
    }

    if (!tokenHeader.startsWith('Bearer')) {
        return res.status(400).json({error: `Authorization headers must begin with 'Bearer`})
    }

    const token = tokenHeader.split(' ')[1];

    if (!token) {
        return next();
    }


    const [error, decoded] = verifyToken(token, process.env.JWT_SECRET);

    if (error) {
        return res.status(401).json({ error: error.message });
    }

    req.user = decoded;
    next();
};


    // ensures that user is logged in
export const requireAuth = (req, res, next) => {
    if (!req.user){
        return res.status(401).json({error: `You're not logged in.`})
    }
    next();
};