## 🔍 Vulnerability Identified
- Type: Cross-Site Scripting (XSS)
- Endpoint: `/search?q=`
- Severity: High

## 💥 Proof of Concept
http://localhost:3000/search?q=<script>alert(1)</script>


## ⚙️ CI/CD Security Pipeline

This project includes an automated DevSecOps pipeline using GitHub Actions:

- Dependency scanning (npm audit)
- Static code analysis (CodeQL)
- Continuous integration on every push
## 📄 Full Report
👉 [View Detailed Report](./reports/xss-report.md)
## 📸 Evidence
![XSS Evidence](./reports/rpt1.PNG)
![XSS Evidence](./reports/rpt2.PNG)
