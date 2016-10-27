import React from 'react';
import { renderToString } from 'react-dom/server';
import readComponent from './readComponent';
import readTemplate from './readTemplate';

const read = (req, res) => {
  console.log('req', req.body);
  let testString = 'Once upon a time'
  let testObj = [{text: 'Once upon a time'}];
  testObj = JSON.stringify(testObj);
  let initRead = React.createFactory(readComponent);
  let appString = renderToString(initRead({data: testString}))
  console.log(appString)
  res.status(200).send(readTemplate({body: appString, title: 'Read', json: testObj}))
}

const data = (req, res) => {
  console.log('req data', req.params)
  let testString = 'Once upon a time'
  res.status(200).send({data: testString})
}

module.exports.read = read;
module.exports.data = data;