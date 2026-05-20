# Setup Guide

# Prerequisites

- Docker Desktop
- Node.js
- Git

---

# Clone Repository

```bash
git clone https://github.com/mukaz4god/Project-01-secure-hr-api.git
cd project-01-secure-hr-api
```

---

# Run Locally

```bash
docker compose up --build
```

---

# Run Tests

```bash
cd app
npm test
```

---

# Run OWASP ZAP Scan

```bash
docker run --rm \
  -v "$(pwd)/security/reports/zap:/zap/wrk" \
  ghcr.io/zaproxy/zaproxy:stable \
  zap-baseline.py \
  -t http://host.docker.internal:3000 \
  -r zap-baseline-report.html
```

---

# Security Pipeline

The CI pipeline includes:
- Gitleaks
- Semgrep
- Dependency-Check
- Trivy
- automated Jest tests