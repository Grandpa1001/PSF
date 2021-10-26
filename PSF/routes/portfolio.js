const multer = require('multer');
const Portfolio = require('../models/portfolio');

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.');
    cb(null, 'portfolio_' + Date.now() +'.'+ ext[ext.length - 1]);
  }
});

const upload = multer({storage: storage}).single('file');

const portfolio = function (router){
  router
    .route('/portfolio')
    .put(function(req, res, next){
      upload(req, res, function(){
        Portfolio.create({
          title: req.body.title,
          description: req.body.description,
          filename: req.file.filename,
        },
        function(err, createdItem){
          if(err){
            res
              .status(400)
              .json({error: err});
          }else{
            res
              .status(200)
              .json({response: createdItem});
          }

        });

      })
  })
  return router;
}

module.exports = portfolio;
