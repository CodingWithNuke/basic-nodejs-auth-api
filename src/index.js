require('dotenv').config();
const express = require('express');

const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(helmet())
  .use(morgan('dev'))
  .use(cors())

require('./routes')(app);

app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || res.statusCode !== 200 ? res.statusCode : 500);
  return res.json({
    error: true,
    message: error.message
  })
})


const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Server is running on port: ${port}`))