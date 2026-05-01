# DevSecOps Secure Pipeline (Node.js + CI/CD + Security)

## 🚀 Overview
This project demonstrates a DevSecOps workflow by integrating security practices into a vulnerable Node.js application.

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

## 💥 Proof of Concept
http://localhost:3000/search?q=
<script>alert(1)</script>

## 📄 Security Report
👉 [View Report](./reports/xss-report.md)

## 📸 Evidence
![XSS Evidence](./reports/rpt1.PNG)

## 🧠 Security Approach
- Vulnerability identification (OWASP Top 10)
- Risk analysis
- Remediation recommendations

## 🎯 Objective
Demonstrate practical skills in application security and DevSecOps practices.

## 👤 Author
Cybersecurity Jr. | DevSecOps Path | Cloud Security Focus