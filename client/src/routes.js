let { Router, Route } = require('react-router');
let App = require('App');

var routes = {
  path: '/',
  component: App,
  onEnter: (router, replaceWith) => {
    if(router.location.pathname === '/') {
      replaceWith(null, '/one');
    }
  },
  childRoutes: [
    {
      path: '/one',
      getComponents: (a, cb) => require.ensure([], require => {
        cb(null, require('pages/pageOne'));
      })
    },
    {
      path: '/two',
      getComponents: (a, cb) => require.ensure([], require => {
        cb(null, require('pages/pageTwo'));
      })
    },
  ]
}