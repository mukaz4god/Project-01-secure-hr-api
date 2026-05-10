# Project 1 - Secure HR API

## Overview
This project is a scenario-based Node.js HR API used to demonstrate DevSecOps practices, application security testing, and remediation of broken access control.

## Business Scenario
An internal HR API allows employees and managers to view employee records. The first version intentionally includes an IDOR vulnerability to demonstrate detection, exploitation, remediation, and retesting.

## Current Features
- Express API
- Demo authentication headers
- Employee record endpoint
- Intentional IDOR vulnerability
- Pentest documentation

## Run Locally
```bash
cd app
npm install
npm start
```

## Run Locally
curl http://localhost:3000/health

## IDOR Test
curl -H "x-user-id: 1" -H "x-user-role: employee" http://localhost:3000/api/employees/2

## OWASP ZAP Baseline Scan

Start the API:

```bash
docker compose up

```
Then run the ZAP baseline scan:

```bash
docker run --rm \
  -v "$(pwd)/security/reports/zap:/zap/wrk" \
  ghcr.io/zaproxy/zaproxy:stable \
  zap-baseline.py \
  -t http://host.docker.internal:3000 \
  -r zap-baseline-report.html \
  -J zap-baseline-report.json
```
