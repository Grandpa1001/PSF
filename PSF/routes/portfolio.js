const multer = require('multer');

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.');
    cb(null, 'portfolio_'+Date.now()+ ext[ext.length - 1]);
  }
})

const upload = multer({storage: storage}).single('file');
// const usersSchema = require('../models/users');
// const mongoose = require('mongoose');
// const Users = mongoose.model('users', usersSchema);

const portfolio = function (router){
  router
    .route('/portfolio')
    .put(function(req, res, next){
      upload(req, res, function(){
        res
          .status(200)
          .json({response: req.body});
      })
  })
  return router;
}

module.exports = portfolio;
