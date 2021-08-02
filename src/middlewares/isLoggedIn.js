const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        return next(new Error("An error occurred whilst trying to verify your session."));
      } else {
        res.locals.jwt = decoded;
        return next();
      }
    })
  } else {
    res.status(403);
    return next(new Error("You are not authenticated."))
  }
}