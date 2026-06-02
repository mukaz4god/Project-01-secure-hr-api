# Custom Semgrep Rules

## Objective

Extend static analysis with organization-specific security controls.

---

## Rules Implemented

### hardcoded-jwt-secret

Purpose:

Detect hardcoded JWT secrets.

Severity:

ERROR

---

### sensitive-console-log

Purpose:

Identify logging that could expose sensitive information.

Severity:

WARNING

---

### potential-ssrf

Purpose:

Review outbound requests for SSRF risks.

Severity:

WARNING

---

## Benefits

- Detect organization-specific issues
- Shift security left
- Improve CI/CD security validation