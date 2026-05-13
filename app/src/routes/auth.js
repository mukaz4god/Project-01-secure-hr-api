const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const users = require("../data/users");

const router = express.Router();

//const JWT_SECRET = process.env.JWT_SECRET || "dev-only-secret-change-me";
const { getJwtSecret } = require("../config/security");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((item) => item.username === username);

  if (!user) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  const passwordValid = await bcrypt.compare(password, user.passwordHash);

  if (!passwordValid) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  const token = jwt.sign(
    {
      sub: String(user.id),
      role: user.role
    },
    getJwtSecret(),
    {
      expiresIn: "15m",
      issuer: "secure-hr-api"
    }
  );

  return res.json({
    accessToken: token,
    tokenType: "Bearer"
  });
});

module.exports = router;