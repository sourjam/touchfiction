import React from 'react';
import { renderToString } from 'react-dom/server';
import baseComponent from '../views/base/baseComponent';
import baseTemplate from '../views/base/baseTemplate';

console.log('baseController');

export default (req, res) => {
  let initBase = React.createFactory(baseComponent);
  let appString = renderToString(initBase());
  res.status(200)
    .send(baseTemplate({
      body: appString,
      title: 'Base'
    }))
}