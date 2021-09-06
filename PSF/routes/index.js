const sendEmail = require('./sendEmail');
const pages = require('./pages')

routesScripts = function(router){
  router = sendEmail(router);
  router = pages(router);

return router
}


module.exports = routesScripts;
