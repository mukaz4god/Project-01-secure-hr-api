const express = require("express");

const router = express.Router();

router.post("/login-demo", (req, res) => {
  return res.json({
    message: "Demo login only. Use headers x-user-id and x-user-role.",
    exampleHeaders: {
      "x-user-id": "1",
      "x-user-role": "employee"
    }
  });
});

module.exports = router;