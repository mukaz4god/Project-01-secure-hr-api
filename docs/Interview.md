# Interview Notes

# 30-Second Summary

I built a scenario-based HR API to simulate securing an internal application across the SDLC. The project started with an intentional IDOR vulnerability and evolved into a hardened service with JWT authentication, RBAC authorization, DevSecOps pipeline security gates, container scanning, DAST validation, and operational security controls.

---

# Key Security Problems Solved

## Broken Access Control (IDOR)
Employees could access unauthorized HR records.

### Fix
Implemented server-side RBAC authorization logic.

---

## Weak Authentication
The initial version trusted client-controlled headers.

### Fix
Implemented JWT authentication with signed token validation and expiry enforcement.

---

## Lack of SDLC Security Controls

### Fix
Integrated:
- Semgrep
- Gitleaks
- Dependency-Check
- Trivy
- OWASP ZAP

into modular GitHub Actions workflows.

---

# Why Modular GitHub Actions?

Reusable workflows:
- reduce duplication
- improve maintainability
- scale across projects
- simplify security policy enforcement

---

# Important Engineering Decisions

## Why build a vulnerable version first?
To demonstrate realistic exploit → remediation → retest workflows.

## Why delay Terraform plan in CI?
I intentionally avoided cloud-aware Terraform plan in CI until secure GitHub OIDC authentication is implemented.

## Why use Docker locally?
To reduce cloud cost and ensure repeatable local development and testing.

---

# What I Would Improve Next

- deploy securely into AWS
- implement GitHub OIDC
- add authenticated ZAP scans
- integrate findings into DefectDojo
- implement centralized logging
- add threat modeling documentation