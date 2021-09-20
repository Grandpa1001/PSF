const usersSchema = require('../models/users');
const mongoose = require('mongoose');
const Users = mongoose.model('users', usersSchema);

const login = function (router){
  router
    .route('/login')
    .get(function(req, res, next){
      if(req.session.user){
        res
          .status(200)
          .json({response: req.session.user});
      }else {
        res
          .status(401)
          .json({error: 'Unauthorized'});
      }
    })
    .post(function(req, res, next){
      if(req.body){
        const {login, password} = req.body;
        Users.findOne({login, password}, (err, user) => {
          if (err) {
            req.session.destroy();
            res
              .status(400)
              .json({error: err});
          } else if (!user) {
            req.session.destroy();
            res
              .status(401)
              .json({error: 'Unauthorized'});
          } else {
            req.session.user = {id: user._id, login: user.get('login')};
            res
              .status(200)
              .json({response: req.session.user});
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

module.exports = login;
