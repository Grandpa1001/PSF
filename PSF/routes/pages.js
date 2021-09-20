const Pages = require('../models/pages');
const mongoose = require('mongoose');


const pages = function (router){
  router
    .route('/pages')
    .get(function(req, res, next){
      console.log('pages', req.session.userId);
      if(req.body){
        Pages.findOne({url: req.query.url, published: true}, (err, pages) => {
          if (err) {
            res
              .status(400)
              .json({error: err});
          } else {
            res
              .status(200)
              .json({response: pages});
          };
        });
      } else {
        res
          .status(400)
          .json({error: 'No body'});
      }
    })
  return router;
}

module.exports = pages;
