## 🔍 Vulnerability Identified
- Type: Cross-Site Scripting (XSS)
- Endpoint: `/search?q=`
- Severity: High

## 💥 Proof of Concept
http://localhost:3000/search?q=<script>alert(1)</script>

## 📄 Full Report
👉 [View Detailed Report](./reports/xss-report.md)

## 📸 Evidence
![XSS Evidence](./reports/rpt1.PNG)