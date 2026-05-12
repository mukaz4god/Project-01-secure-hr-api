## I can now say
I built an initial version of the API with an intentional broken access control vulnerability, committed it, and used that as a baseline for security testing, pipeline integration, and later remediation.

## Why Semgrep was suppressed
I generated ZAP reports locally as evidence, but excluded raw generated reports from the repo to avoid noisy CI findings and leaking scan artifacts. I documented the workflow and kept evidence separately.

## JWT Authentication Improvement

The first version used fake headers to simulate identity during the IDOR testing phase. I later replaced this with JWT authentication to make the API more realistic.

### Security Improvements
- Removed trust in client-controlled identity headers
- Added login endpoint
- Added signed JWTs with expiry
- Added issuer validation
- Preserved server-side authorization checks

### Remaining Production Improvements
- Store JWT secret in AWS Secrets Manager or Parameter Store
- Rotate signing keys
- Add refresh token strategy
- Add account lockout and rate limiting
- Use HTTPS only in production
