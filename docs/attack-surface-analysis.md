# Attack Surface Analysis – Secure HR API

## External Attack Surface

### HTTP Endpoints

| Endpoint | Risk |
|-----------|------|
| /health | Information disclosure |
| /login | Brute force |
| /api/me | Authentication bypass |
| /api/employees/:id | IDOR |

---

## Authentication Surface

### JWT Tokens

Risks:

- Token theft
- Weak secret keys
- Expired token bypass attempts

Controls:

- JWT verification
- Strong secret management
- Expiration enforcement

---

## Authorization Surface

### RBAC

Risks:

- Privilege escalation
- Horizontal privilege escalation
- Broken access control

Controls:

- Role validation
- Ownership checks
- Authorization middleware

---

## CI/CD Surface

### GitHub Actions

Risks:

- Workflow tampering
- Secret exposure
- Supply chain compromise

Controls:

- OIDC federation
- Secret scanning
- Semgrep
- Dependency review

---

## Infrastructure Surface

### AWS

Components:

- EC2
- ECR
- SSM
- Parameter Store
- CloudWatch

Risks:

- IAM misconfiguration
- Secret exposure
- Container compromise

Controls:

- Least privilege IAM
- SSM deployment
- Encrypted secrets
- Centralized logging