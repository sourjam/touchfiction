import homeController from './views/home/homeController';
// import readController from './views/read/readController';
const readController = require('./views/read/readController');
module.exports = function(app) {

  app.get('/', homeController);

  app.get('/read/:id', readController.read);
  app.get('/read/:id/data', readController.data);
}