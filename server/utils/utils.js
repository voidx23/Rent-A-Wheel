import jwt from 'jsonwebtoken';

function generateToken(payload) {
    try {
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        return token;
    } catch (error) {
        console.error('Error generating token:', error);
        throw error; 
    }
}

export default generateToken;
