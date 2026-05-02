const express = require('express');
const helmet = require('helmet');

const app = express();

// 🔐 Seguridad con headers
app.use(helmet());

// CSP personalizada (clave)
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  })
);

app.get('/', (req, res) => {
  res.send('DevSecOps Pipeline Running');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});