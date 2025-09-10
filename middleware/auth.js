const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;
const expiration = "30m"

const authMiddleware = async (req, res) => {
    let token = req.headers.authorization;

    token = token.split(" ").pop().trim();

    if (!token) return req;

    try {
        const data = jwt.verify(token, secret);
        req.user = data;
    }
    catch (err){
        console.log(err);
        return res.status(401).json({message: "Invalid token"})
    }

    next();
}

const signToken = (user) => {

    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email
    }

    return jwt.sign({data: payload}, secret, {expiresIn: expiration});
}

module.exports = {authMiddleware, signToken}