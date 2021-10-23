const fastify = require("fastify");

const app = fastify({ logger: true });

app.get("/hello", () => {
  return {value: "world"};
});

app.listen(9999);
