module.exports = async (error, req, res, next) => {
  const otherStatusCode = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(error.status || otherStatusCode);

  return res.json({
    message: error.message || "An error occurred...",
  });
};
