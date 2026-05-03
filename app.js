const express = require('express');
const helmet = require('helmet');

const app = express();

// ❌ Quitar firma del servidor (MUY IMPORTANTE)
app.disable('x-powered-by');

// 🔐 Helmet completo y bien configurado
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],

        // 🔥 CLAVE (lo que te está marcando ZAP)
        frameAncestors: ["'none'"],   // Anti-clickjacking
        formAction: ["'self'"],

        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:"],

        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },

    // 🔐 Fuerza X-Content-Type-Options
    noSniff: true,

    // 🔐 Anti Clickjacking extra (fallback)
    frameguard: {
      action: 'deny',
    },
  })
);

app.get('/', (req, res) => {
  res.send('DevSecOps Pipeline Running');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});