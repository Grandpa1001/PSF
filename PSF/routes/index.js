const sendEmail = require('./sendEmail');
const pages = require('./pages');
const login = require('./login');


routesScripts = function(router){
  router = sendEmail(router);
  router = pages(router);
  router = login(router);


  return router;
}

module.exports = routesScripts;
