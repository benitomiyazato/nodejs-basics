const express = require("express");
const authorization = require("./authorization");
const logger = require("./logger");
const app = express();

app.use(authorization, logger);

app.get("/", (req, res) => {
  res.send(`<h1>Hello, ${req.user.name}, age of ${user.age}</h1>`);
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
