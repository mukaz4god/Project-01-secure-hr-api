
# OWASP ZAP DAST Notes

## Scan Type
ZAP baseline scan against the locally running HR API.

## Target
http://localhost:3000

## Purpose
The purpose of this scan is to demonstrate dynamic application security testing as part of the DevSecOps workflow.

## Evidence
Reports are saved in:

- `security/reports/zap/zap-baseline-report.html`
- `security/reports/zap/zap-baseline-report.json`

## Notes
This is an unauthenticated baseline scan. Authenticated ZAP scans will be added later to test protected API endpoints.

MSYS_NO_PATHCONV=1 docker run --rm \
  -v "$(pwd)/security/reports/zap:/zap/wrk" \
  ghcr.io/zaproxy/zaproxy:stable \
  zap-api.py \
  -t http://host.docker.internal:3000/api \
  -f openapi \
  -r zap-api-report.html \
  -z "-config replacer.full_list(0).description=auth1 \
      -config replacer.full_list(0).enabled=true \
      -config replacer.full_list(0).matchtype=REQ_HEADER \
      -config replacer.full_list(0).matchstr=x-user-id \
      -config replacer.full_list(0).replacement=1 \
      -config replacer.full_list(1).description=auth2 \
      -config replacer.full_list(1).enabled=true \
      -config replacer.full_list(1).matchtype=REQ_HEADER \
      -config replacer.full_list(1).matchstr=x-user-role \
      -config replacer.full_list(1).replacement=employee"