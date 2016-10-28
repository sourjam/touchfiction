import React from 'react';
import { renderToString } from 'react-dom/server';
import homeComponent from './homeComponent';
import homeTemplate from './homeTemplate';

console.log('yes')

export default (req, res) => {
  let initHome = React.createFactory(homeComponent);
  let appString = renderToString(initHome({name: 'John'}));
  res.status(200).send(homeTemplate({body: appString, title: 'Home'}))
}