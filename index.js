require('babel-core/register')({
    presets: ['es2015', 'react', 'stage-0']
});

const Express = require('express');
const React = require('react');
const reactDom = require('react-dom/server');
const path = require('path')
const router = require('./server/router')

const server = Express();

server.use('/assets', Express.static(path.join(__dirname, '/server/templates/assets')))

router(server);

const port = process.env.PORT || 3001;

server.listen(port, (err) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Server listening on', port);
  }
});