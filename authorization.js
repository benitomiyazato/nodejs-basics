const authorization = (req, res, next) => {
  const { user } = req.query;
  if (user == "john") {
    console.log("USER JOHN");
    req.user = { name: "john", id: 3 };
  } else if (user == "blane") {
    console.log("USER BLANE");
    req.user = { name: "blane", id: 1 };
  } else {
    res
      .status(401)
      .send(`<h1>There's no such user with the name of ${user}</h1>`);
  }
  next();
};

module.exports = authorization;
