const express = require("express");
const helmet = require("helmet");

const employeeRoutes = require("./routes/employees");
const authRoutes = require("./routes/auth");

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", authRoutes);
app.use("/api", employeeRoutes);

app.listen(port, () => {
  console.log(`Secure HR API running on port ${port}`);
});