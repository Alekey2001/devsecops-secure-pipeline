# DevSecOps Secure Pipeline Project
## 🚀 Overview
This project demonstrates a DevSecOps workflow by integrating security practices into a vulnerable Node.js application.
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
# DevSecOps Secure Pipeline (Node.js + CI/CD + Security)


## 🛠️ Tech Stack
- Node.js (Express)
- Security Testing:
  - SAST (planned)
  - DAST (manual testing)
  - Dependency Scanning (npm audit)
- Tools: Burp Suite, OWASP methodology

## 🔍 Vulnerability Identified
- Type: Cross-Site Scripting (XSS)
- Endpoint: `/search?q=`
- Severity: High (OWASP Top 10)
## 📄 Security Report
👉 [View Report](./reports/xss-report.md)

## 📸 Evidence
![XSS Evidence](./reports/rpt1.PNG)

## 🧠 Security Approach
- Vulnerability identification (OWASP Top 10)
- Risk analysis
- Remediation recommendations
## ⚙️ CI/CD Security Pipeline

This project includes an automated DevSecOps pipeline using GitHub Actions:

- Dependency scanning (npm audit)
- Static code analysis (CodeQL)
- Continuous integration on every push
## 📸 Evidence
![XSS Evidence](./reports/rpt2.PNG)

## 🎯 Objective
Demonstrate practical skills in application security and DevSecOps practices.

## 👤 Jesus A. Rodriguez
Cybersecurity Jr. | DevSecOps Path | Cloud Security Focus