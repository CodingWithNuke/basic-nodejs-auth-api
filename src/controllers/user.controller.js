const db = require("../database")

exports.findMe = async (req, res, next) => {
  const user = await db.users.findOne({ _id: res.locals.jwt._id });

  if (user) {
    delete user.password;
    return res.json(user);
  } else {
    res.status(404);
    return next(new Error("User not found"));
  }
}