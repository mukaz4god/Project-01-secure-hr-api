const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const employeeRoutes = require("./routes/employees");
const authRoutes = require("./routes/auth");

const requestContext = require("./middleware/requestContext");
const securityLogger = require("./middleware/securityLogger");
const apiLimiter = require("./middleware/rateLimiter");

const app = express();

app.use(helmet());

app.use(express.json());

app.use(requestContext);

app.use(morgan("combined"));

app.use(securityLogger);

app.use(apiLimiter);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", authRoutes);
app.use("/api", employeeRoutes);

module.exports = app;