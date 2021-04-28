module.exports = (app) => {
  app
    .use("/auth", require("./auth.routes.js"))
    .use("/users", require("./user.routes.js"));
};
