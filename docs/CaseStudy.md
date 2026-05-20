# Case Study — Secure HR API

# Background

A company requires an internal HR API for employees and managers to access employee information.

Because HR data is sensitive, the application must implement strong authentication, authorization, monitoring, and security validation controls.

---

# Initial Risk

The first version of the application intentionally contained an IDOR vulnerability:
- authenticated users could access unauthorized employee records
- access control relied on insecure assumptions
- there was no operational protection against abuse

---

# Objectives

The goals of this project were to:
- identify and remediate broken access control
- integrate security scanning into CI/CD
- implement secure authentication
- add operational security controls
- demonstrate DevSecOps practices end-to-end

---

# Security Improvements Implemented

## Access Control
- added RBAC authorization
- enforced server-side validation
- blocked unauthorized employee access

## Authentication
- replaced insecure headers with JWT authentication
- enforced signed token validation
- added token expiry and issuer validation

## DevSecOps
- added Gitleaks
- added Semgrep
- added Dependency-Check
- added Trivy
- added automated authorization tests

## Operational Hardening
- added rate limiting
- added login brute-force protection
- added request correlation IDs
- added structured logging

---

# Results

The project evolved from a vulnerable API into a hardened service with:
- CI/CD security gates
- automated testing
- container security validation
- operational monitoring controls
- documented remediation workflows

---

# Lessons Learned

- broken access control is easy to introduce
- authorization logic must be server-side
- security scanning should be automated early
- operational controls are as important as vulnerability remediation
- modular CI/CD workflows improve scalability and maintainability