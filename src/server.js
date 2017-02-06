const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', function(req, res) {
  res.json({
    message: '/'
  });
});

app.get('/hello', function(req, res) {
  res.json({
    message: '/hello'
  });
});

module.exports = app;
module.exports.handler = serverless(app);
