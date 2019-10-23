'use strict';

const express = require('express');
const app = express();
const port = 80;
const snapUrl = 'https://snaphydro.wordpress.com';
const serverless = require('serverless-http');


const router = express.Router();
router.get('/*', (req, res) => {
  const redirectUrl = `${snapUrl}${req.originalUrl}`;
  console.log(`Redirecting ${req.originalUrl} to ${redirectUrl}`);
  res.redirect(301, redirectUrl);
});

app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
