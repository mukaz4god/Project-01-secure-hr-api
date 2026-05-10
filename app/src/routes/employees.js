const express = require("express");
const employees = require("../data/employees");
const authenticate = require("../middleware/auth");

const router = express.Router();

function canAccessEmployee(requestingUser, targetEmployee) {
  const isSelf = requestingUser.id === targetEmployee.id;
  const isManagerOfEmployee = targetEmployee.managerId === requestingUser.id;
  const isPrivilegedRole = ["hr", "admin"].includes(requestingUser.role);

  return isSelf || isManagerOfEmployee || isPrivilegedRole;
}

router.get("/employees/:id", authenticate, (req, res) => {
  const employeeId = Number(req.params.id);
  const employee = employees.find((item) => item.id === employeeId);

  if (!employee) {
    return res.status(404).json({ error: "Employee not found" });
  }

  if (!canAccessEmployee(req.user, employee)) {
    return res.status(403).json({
      error: "Forbidden: insufficient permission to access this employee record"
    });
  }

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