const { logRequestAndResponse, errorHandling } = require("./middlewares");
const express = require("express");
require("express-async-errors"); // For capturing async errors

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(logRequestAndResponse); // For logging requests and responses. Should be before endpoints

app.get("/testNormal", async (req, res) => {
  const sampleResponse = {
    title: "Software Developer",
  };

  return res.send(sampleResponse);
});

app.get("/testError", async (req, res) => {
  throw new Error("Oops! This was intentional :)");
});

app.use(errorHandling); // For error handling(logging, returning 500 etc.). Should be after endpoints

const httpPort = 2308;

app.listen(httpPort, () => {
  console.log(`server is running on port: ${httpPort}`);
});
