# Threat Model – Secure HR API

## Overview

The Secure HR API is a Node.js REST API that provides employee data access.

Authentication is JWT-based.

Role-based access control (RBAC) restricts access to sensitive resources.

The application is deployed using Docker and secured through a DevSecOps pipeline.

---

## Assets

### Sensitive Assets

- Employee records
- JWT tokens
- Application secrets
- CI/CD pipeline configuration
- Container images

---

## Actors

### Legitimate Users

- Employees
- Managers
- Administrators

### Threat Actors

- Unauthenticated attacker
- Authenticated malicious employee
- Compromised administrator
- External attacker

---

## Entry Points

- /login
- /health
- /api/me
- /api/employees/:id

---

## Trust Boundaries

### Internet → API

External traffic enters application.

### API → Authentication Layer

JWT validation boundary.

### API → Data Layer

Employee data access boundary.

### CI/CD → Deployment

GitHub Actions deployment boundary.

---

## Security Controls

- JWT authentication
- RBAC authorization
- Rate limiting
- Helmet security headers
- Parameter Store secrets
- OIDC federation
- CloudWatch logging
- Containerization

---

## High-Risk Threats

| Threat | Mitigation |
|----------|------------|
| IDOR | RBAC + ownership validation |
| Credential theft | JWT expiration |
| Secret exposure | Parameter Store |
| Privilege escalation | Authorization checks |
| CI/CD compromise | GitHub OIDC |
| Container compromise | Immutable images |