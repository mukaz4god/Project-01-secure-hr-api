# Architecture Diagram

```text
Developer
   │
   ▼
GitHub Repository
   │
   ▼
GitHub Actions CI Pipeline
   ├── Gitleaks
   ├── Semgrep
   ├── Dependency-Check
   ├── Trivy
   └── Automated Tests
   │
   ▼
Dockerized HR API
   │
   ├── JWT Authentication
   ├── RBAC Authorization
   ├── Rate Limiting
   ├── Security Logging
   └── Helmet Security Headers
   │
   ▼
OWASP ZAP DAST Validation
```