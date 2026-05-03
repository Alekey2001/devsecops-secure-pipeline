# OWASP ZAP Security Scan Report

## Target
http://localhost:3000

## Tool
OWASP ZAP (DAST)

## Summary
A dynamic application security test (DAST) was performed against the Node.js application.

## Findings

### 1. Cross-Site Scripting (XSS)
- Risk: High
- Description: Reflected XSS vulnerability detected
- Impact: Allows execution of arbitrary JavaScript in user browser
- Recommendation: Sanitize user input and implement output encoding

### 2. Missing Security Headers
- Risk: Medium
- Description: Missing HTTP security headers
- Recommendation:
  - Content-Security-Policy
  - X-Content-Type-Options
  - X-Frame-Options

## Evidence
## 🔐 Security (DAST - OWASP ZAP)

A security scan was performed using OWASP ZAP.

### Findings:
- Missing Content Security Policy (CSP)
- Missing anti-clickjacking protection
- Information disclosure via headers

### Mitigation:
- Implemented Helmet in Express
- Configured strict CSP directives
- Removed X-Powered-By header
- Added X-Content-Type-Options


## Security Scan Summary (OWASP ZAP)

A dynamic security analysis was performed using OWASP ZAP.

### Findings
- Initial issues:
  - Missing/incomplete Content Security Policy (CSP)
  - Clickjacking exposure
  - Information disclosure via headers

### Remediation
- Disabled server fingerprinting (X-Powered-By)
- Implemented strict CSP with explicit directives
- Added secure headers via Helmet:
  - X-Frame-Options
  - X-Content-Type-Options
  - HSTS

### Validation
- Manual verification of HTTP headers
- Re-scan with OWASP ZAP

### Result
- Critical issues resolved
- Remaining alerts classified as medium/low or false positives due to scanner strictness

### Conclusion
Application hardened following OWASP best practices, reducing attack surface and improving security posture.
![ZAP Scan](./rpt3.PNG)

## Conclusion

The application contains critical vulnerabilities that must be remediated before production deployment.