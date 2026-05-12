const bcrypt = require("bcryptjs");

const users = [
  {
    id: 1,
    username: "alice",
    role: "employee",
    passwordHash: bcrypt.hashSync("Password123!", 10)
  },
  {
    id: 2,
    username: "brian",
    role: "employee",
    passwordHash: bcrypt.hashSync("Password123!", 10)
  },
  {
    id: 3,
    username: "caroline",
    role: "manager",
    passwordHash: bcrypt.hashSync("Password123!", 10)
  },
  {
    id: 4,
    username: "harriet",
    role: "hr",
    passwordHash: bcrypt.hashSync("Password123!", 10)
  }
];

module.exports = users;