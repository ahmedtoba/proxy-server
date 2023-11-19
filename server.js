const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors()); // Enable CORS for all routes

const PORT = process.env.PORT || 5000;

app.use('/api', createProxyMiddleware({
  target: 'https://api.stlouisfed.org',
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
}));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));