import React from 'react';
// import Hello from './hello';
import components from './hello'
import {renderToString} from 'react-dom/server';
import template from './templates/template';

console.log('router')
module.exports = function(app) {
  app.get('/', (req, res)=>{
    console.log('comp', components.HelloMessage)
    var helloMsg = React.createFactory(components.HelloMessage)
    // const appString = renderToString(<Hello/>);
    let appString = renderToString(helloMsg({name: 'John'}))
    res.status(200).send(template({body: appString, title: 'Home'}));
  });
}