import jwt from "jsonwebtoken"

export default function generateToken(payload) {
    return jwt.sign(payload, process.env.ACCESS_SECRET, { expiresIn: '1800s' });
}