const logger = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  req.user.age = 32 * 5;

  console.log(url, method, req.user);
  next();
};

module.exports = logger;
