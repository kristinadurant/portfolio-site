const express = require('express'),
  app = express(),
  path = require('path');

app.use(express.json());


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));
}

if (process.env.NODE_ENV === 'production') {
    app.get('*', (request, response) => {
      response.sendFile(
        path.resolve(__dirname, '..', 'client', 'build', 'index.html')
      );
    });
  }
  
  module.exports = app;