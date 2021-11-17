const { get } = require('got')
const fastify = require("fastify");

const app = fastify({ logger: true });

app.get("/hello", () => {
  return {value: "world"};
});

app.get("/data", async () => {
  const url = process.env.TYPICODE || "https://jsonplaceholder.typicode.com";
  const { body } = await get(url + "/todos/1", { responseType: "json" });
  return await body
});

app.listen(9999);
