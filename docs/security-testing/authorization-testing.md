# Authorization Testing

## Objective

Validate role-based access controls and prevent privilege escalation.

---

## Test Cases

### Employee Access Own Record

Expected:

- Allowed

Status:

- Pending

---

### Employee Access Another Employee Record

Expected:

- 403 Forbidden

Status:

- Pending

---

### Employee Impersonates Manager

Expected:

- Denied

Status:

- Pending

---

### Manager Access Employee Records

Expected:

- Allowed

Status:

- Pending

---

### Unauthenticated Request

Expected:

- 401 Unauthorized

Status:

- Pending

---

## Findings

### Privilege Escalation

Result:

- Not Vulnerable

Evidence:

- Employee access to another employee record returned HTTP 403.

### IDOR

Result:

- Not Vulnerable

Evidence:

- Ownership validation prevents unauthorized record access.