module.exports = async (error, req, res, next) => {
  const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(error.status || statusCode);

  return res.json({
    message: error.message || "An error occurred...",
  });
};
