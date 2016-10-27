import homeController from './views/home/homeController';

module.exports = function(app) {

  app.get('/', homeController)

}