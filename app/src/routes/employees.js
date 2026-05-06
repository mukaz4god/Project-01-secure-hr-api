const express = require("express");
const employees = require("../data/employees");
const authenticate = require("../middleware/auth");

const router = express.Router();

router.get("/employees/:id", authenticate, (req, res) => {
  const employeeId = Number(req.params.id);
  const employee = employees.find((item) => item.id === employeeId);

  if (!employee) {
    return res.status(404).json({ error: "Employee not found" });
  }

  // INTENTIONAL VULNERABILITY:
  // Any authenticated user can access any employee record by changing the ID.
  return res.json(employee);
});

router.get("/me", authenticate, (req, res) => {
  const employee = employees.find((item) => item.id === req.user.id);

  if (!employee) {
    return res.status(404).json({ error: "Current user not found" });
  }

  return res.json(employee);
});

module.exports = router;