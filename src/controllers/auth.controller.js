const jwt = require('jsonwebtoken');
const { hash, compare } = require('bcryptjs');
const db = require('../database')

exports.signup = async (req, res, next) => {
  const { username, password } = req.body;

  const userExists = await db.users.findOne({ username });
  if (userExists) {
    res.status(409);
    return next(new Error("User with that username already exists."));
  }

  await db.users.insert({
    username,
    password: await hash(password, 12)
  });

  res.status(201);
  return res.json({
    message: "User created."
  })
}

exports.signin = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await db.users.findOne({ username });

  if (user) {
    if (await compare(password, user.password)) {
      delete user.password;

      return res.json({
        token: jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "7d" }),
        user
      })
    } else {
      res.status(401);
      return next(new Error("Username and/or password is incorrect."));
    }
  } else {
    res.status(500);
    return next(new Error("An error occurred."))
  }
}