const verifyToken = async (req, res, next) => {
    const {token} = req.body;
    if(!token) {
        res.status(403).send("Token not Found");
    }

    const decoded = await jwt.verify(token, process.env.jwtKey);
    if(!decoded) {
        res.status(403).send("Token not Found");
    }

    req.user = decoded;
    next();
}

module.exports = verifyToken;