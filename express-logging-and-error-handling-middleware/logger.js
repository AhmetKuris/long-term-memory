const { transports, createLogger, format } = require("winston");

const logger = createLogger({
  format: format.combine(
    format.colorize({
      all: true,
    }),
    format.timestamp(),
    format.prettyPrint(),
    format.printf(
      (info) => `\n ${info.timestamp} ${info.level} ${info.message}`
    )
  ),
  transports: [new transports.Console()],
});

module.exports = {
  logger,
};
