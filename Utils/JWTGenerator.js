const jwt = require("jsonwebtoken");

function JWTGenerator(payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
    return token;
}

module.exports = JWTGenerator;
