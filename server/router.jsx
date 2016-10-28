import homeController from './views/home/homeController';
import baseController from './controllers/baseController';
// import readController from './views/read/readController';
const readController = require('./views/read/readController');
module.exports = function(app) {

  app.get('/', baseController);

  app.get('/read/:id', readController.read);
  app.get('/read/:id/data', readController.data);
}