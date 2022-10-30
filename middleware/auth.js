const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const bearerHeader = req.body.token || req.query.token || req.headers["x-access-token"]|| req.headers['authorization']||req.cookies.token;
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    try {
      const decoded = jwt.verify(req.token, config.TOKEN_KEY);
      req.user = decoded;
    } catch (err) {
      return res.send({message:"Invalid Token"});
    }
  } else {
    // Forbidden
    res.sendStatus(403);
  }
  return next();
};

module.exports = verifyToken;