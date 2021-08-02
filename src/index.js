require("dotenv").config();
const express = require("express");

const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

require("./routes")(app);

const { errorHandler, routeNotFound } = require("./middlewares");
app.use(routeNotFound);
app.use(errorHandler);

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Server is running on: http://localhost:${port}`));
