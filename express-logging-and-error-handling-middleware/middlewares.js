const util = require("util");
const { logger } = require("./logger");

// Needed for response body access
const resBodyAccess = (res, send) => (content) => {
  res.contentBody = content;
  res.send = send;
  res.send(content);
};

// Logging middleware
function logRequestAndResponse(req, res, next) {
  logger.info(
    `REQUEST: ${req.method} ${req.url} ${util.inspect(req.body, false, null)}`
  );
  res.send = resBodyAccess(res, res.send);

  res.on("finish", () => {
    logger.info(
      `RESPONSE: ${res.statusCode} ${util.inspect(res.contentBody, {})}`
    );
  });

  next();
}

// Error handling middleware
function errorHandling(err, req, res, next) {
  logger.error(err.stack);
  res.status(500).send("Internal Server Error");
}

module.exports = {
  logRequestAndResponse,
  errorHandling,
};
