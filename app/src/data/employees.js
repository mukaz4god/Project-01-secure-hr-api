// WARNING: Intentional IDOR vulnerability for security testing.
// This will be fixed in a later stage of the project.

const employees = [
  {
    id: 1,
    name: "Alice Johnson",
    department: "HR",
    role: "employee",
    salaryBand: "B2",
    managerId: 3
  },
  {
    id: 2,
    name: "Brian Smith",
    department: "Engineering",
    role: "employee",
    salaryBand: "C1",
    managerId: 3
  },
  {
    id: 3,
    name: "Caroline Brown",
    department: "HR",
    role: "manager",
    salaryBand: "M1",
    managerId: null
  }
];

module.exports = employees;