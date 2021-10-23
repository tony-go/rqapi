const express = require("express");

const app = express();
const port = 9999;

app.get("/hello", (_, res) => {
  res.send({ value: "world" });
});

app.listen(port);