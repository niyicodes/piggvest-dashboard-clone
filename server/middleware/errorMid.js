const errorHandler = (err, req, res, next) => {
  const statuscode = res.statuscode ? res.statuscode : 500;

  res.status(statuscode);
  console.log(err.message);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
