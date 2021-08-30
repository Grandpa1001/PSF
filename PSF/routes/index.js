const sendEmail = require('./sendEmail');

routesScripts = function(router){
  router = sendEmail(router);

return router
}


module.exports = routesScripts;
