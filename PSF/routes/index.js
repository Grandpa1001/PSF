const sendEmail = require('./sendEmail');
const pages = require('./pages');
const login = require('./login');
const portfolio = require('./portfolio');


routesScripts = function(router){
  router = sendEmail(router);
  router = pages(router);
  router = login(router);
  router = portfolio(router);

  return router;
}

module.exports = routesScripts;
