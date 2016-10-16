const Express = require('express');

const App = Express();

const port = process.env.PORT || 3001;
App.set('port', port);

App.listen(App.get('port'), (err) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Server listening on', port);
  }
})