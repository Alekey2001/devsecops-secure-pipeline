# DevSecOps Secure Pipeline Project

## Overview
This project demonstrates a DevSecOps approach by integrating security practices into a CI/CD pipeline using a vulnerable Node.js application.

## Application
A simple Express-based web application with an intentionally vulnerable endpoint for security testing.

## Vulnerability Identified
- Type: Cross-Site Scripting (XSS)
- Endpoint: /search?q=
- Status: Confirmed

## Proof of Concept
Example payload:
<script>alert(1)</script>

Test URL:
http://localhost:3000/search?q=<script>alert(1)</script>

## Tech Stack
- Node.js (Express)
- GitHub (Version Control)
- Upcoming: CI/CD (GitHub Actions), AWS Deployment

## Security Focus
- OWASP Top 10
- Vulnerability identification
- Secure development practices

## Next Steps
- Implement SAST (CodeQL)
- Add DAST (OWASP ZAP)
- Deploy to AWS