const express = require('express');
const app = express();
const port = 80;
const snapUrl = 'https://snaphydro.wordpress.com';


app.get('/*', (req, res) => {
  const redirectUrl = `${snapUrl}${req.originalUrl}`;
  console.log(`Redirecting ${req.originalUrl} to ${redirectUrl}`);
  res.redirect(301, redirectUrl);
});

app.listen(port, () => console.log(`Listening on port ${port}…`));
