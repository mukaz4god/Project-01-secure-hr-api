# Project 1 — Secure HR API

## Overview

This project is a scenario-based DevSecOps and Product Security portfolio project designed to simulate securing an internal HR API across the software delivery lifecycle.

The project demonstrates:
- broken access control remediation
- JWT authentication hardening
- CI/CD security automation
- container security
- DAST validation
- operational security controls
- secure development lifecycle practices

---

# Business Scenario

An internal HR API allows employees and managers to access employee records.

The initial version intentionally included a broken access control (IDOR) vulnerability that allowed authenticated users to access unauthorized employee records.

The project evolved through multiple hardening phases:
1. vulnerable baseline
2. access control remediation
3. JWT authentication
4. DevSecOps pipeline integration
5. operational security hardening

---

# Security Controls Implemented

## Application Security
- JWT authentication
- RBAC authorization
- server-side access control validation
- Helmet security headers
- brute-force protection
- API rate limiting

## DevSecOps Pipeline
- Gitleaks (secret scanning)
- Semgrep (SAST)
- OWASP Dependency-Check (SCA)
- Trivy (container scanning)
- automated security tests
- modular GitHub Actions workflows

## Dynamic Security Testing
- OWASP ZAP baseline scan

## Operational Security
- structured security logging
- request correlation IDs
- audit-style request logging

---

# Technology Stack

## Application
- Node.js
- Express

## DevSecOps
- GitHub Actions
- Docker

## Security Tooling
- Semgrep
- Gitleaks
- OWASP Dependency-Check
- Trivy
- OWASP ZAP

---

# Project Evolution

| Version | Description |
|---|---|
| v1-insecure-baseline | Initial vulnerable HR API |
| v1-idor-vulnerable | Confirmed IDOR vulnerability |
| v2-idor-fixed | Access control remediation |
| v3-access-control-tests | Automated authorization tests |
| v4-jwt-auth | JWT authentication implementation |
| v5-operational-hardening | Rate limiting and logging controls |

---

# Example Security Findings

## Initial IDOR Vulnerability

An authenticated employee could access another employee's HR record by modifying the employee ID in the request path.

### Vulnerable Request

```bash
curl -H "Authorization: Bearer <token>" \
http://localhost:3000/api/employees/2
```

### Remediation
Added server-side authorization validation:
- self-access only
- manager relationship validation
- privileged HR/admin access

---

# Running Locally

## Start Application

```bash
docker compose up --build
```

## Health Check

```bash
curl http://localhost:3000/health
```

## Run Tests

```bash
cd app
npm test
```

---

# OWASP ZAP DAST

Run baseline scan:

```bash
docker run --rm \
  -v "$(pwd)/security/reports/zap:/zap/wrk" \
  ghcr.io/zaproxy/zaproxy:stable \
  zap-baseline.py \
  -t http://host.docker.internal:3000 \
  -r zap-baseline-report.html
```

---

# Future Improvements

- AWS deployment with Terraform
- GitHub OIDC authentication
- ECR image scanning
- CloudWatch logging integration
- DefectDojo findings aggregation
- authenticated ZAP scans
- threat modeling

---

# Screenshots & Evidence

See:
- `docs/screenshots/`
- `security/pentest/`
- `security/zap/`