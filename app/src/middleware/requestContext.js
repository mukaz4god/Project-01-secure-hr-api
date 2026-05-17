const crypto = require("crypto");

function requestContext(req, res, next) {
  const correlationId = crypto.randomUUID();

  req.correlationId = correlationId;
  res.setHeader("X-Correlation-ID", correlationId);

  next();
}

module.exports = requestContext;