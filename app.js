const express = require('express');
const helmet = require('helmet');

const app = express();

// 🔐 Quitar fingerprint
app.disable('x-powered-by');

// 🔥 CSP MANUAL (ANTES DE HELMET)
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; " +
    "script-src 'self'; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data:; " +
    "font-src 'self' data:; " +
    "connect-src 'self'; " +
    "frame-src 'none'; " +
    "object-src 'none'; " +
    "base-uri 'self'; " +
    "form-action 'self'; " +
    "frame-ancestors 'none'; " +
    "manifest-src 'self'; " +
    "media-src 'self';"
  );
  next();
});

// 🔐 Helmet (mantener, pero SIN CSP para evitar conflicto)
app.use(
  helmet({
    contentSecurityPolicy: false, // 👈 IMPORTANTE
    frameguard: { action: 'deny' },
    noSniff: true,
  })
);

app.get('/', (req, res) => {
  res.send('DevSecOps Pipeline Running');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});