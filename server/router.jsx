import React from 'react';
import Hello from './hello';
import {renderToString} from 'react-dom/server';
import template from './templates/template';

console.log('router')
module.exports = function(app) {
  app.get('/', (req, res)=>{
    const appString = renderToString(<Hello/>);
    res.status(200).send(template({body: appString, title: 'Home'}));
  });
}