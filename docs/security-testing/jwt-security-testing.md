# JWT Security Testing

## Objective

Validate JWT implementation against common attacks.

---

## Test Cases

### JWT Missing

Request without JWT.

Expected:

- 401 Unauthorized

Status:

- Pending

---

### Invalid JWT Signature

Modify token payload.

Expected:

- 401 Unauthorized

Status:

- Pending

---

### Expired JWT

Use expired token.

Expected:

- 401 Unauthorized

Status:

- Pending

---

### Privilege Escalation Attempt

Modify role claim.

Expected:

- Access denied

Status:

- Pending

---

### Access Another User Record

Employee accesses another employee.

Expected:

- 403 Forbidden

### JWT Missing

Status:

- Passed

Evidence:

- HTTP 401 returned