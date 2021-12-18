const multer  = require('multer');
const Portfolio  = require('../models/portfolio');

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.');
    cb(null, 'portfolio_' + Date.now() + '.' +ext[ext.length - 1]);
  }
});

const upload = multer({ storage: storage }).single('file');

function getFullImagePath (req, filename) {
  const {origin, host} = req.headers;
  const protocol = origin.split(':')[0];
  return `${protocol}://${host}/uploads/${filename}`;
}

const portfolio = function (router){
  router
    .route('/portfolio')
    .get(function(req, res, next){
      Portfolio.find({}, function(err, works){
        if(err){
          res
            .status(400)
            .json({error: err});
        }else{

          works.map(item => {
            item.filename = getFullImagePath(req, item.filename);
          } )
          res
            .status(200)
            .json({response: works});
        }
      })
    })
    .put(function(req, res, next){
      upload(req, res, function(){
        Portfolio.create({
          title: req.body.title,
          description: req.body.description,
          filename: req.file.filename,
        }, function(err, createdItem) {
          if(err){
            res
              .status(400)
              .json({error: err});
          }else{
            createdItem.filename = getFullImagePath(req, createdItem.filename)
            res
              .status(200)
              .json({response: createdItem});
          }
        });
      })
    });

    router
    .route('/portfolio/:id')
    .post(function(req, res, next){
      const isFileUploading = Object.keys(req.body).length === 0;
      const id = req.params.id;
      if(isFileUploading){
        //uploading file
        upload(req, res, function(){
          Portfolio.findByIdAndUpdate(id, {
            title: req.body.title,
            description: req.body.description,
            filename: req.file.filename,
          }, {new: true}, function(err, createdItem) {
            if(err){
              res
                .status(400)
                .json({error: err});
            }else{
              createdItem.filename = getFullImagePath(req, createdItem.filename)
              res
                .status(200)
                .json({response: createdItem});
            }
          });
        })
      }else{
        Portfolio.findByIdAndUpdate(id, {
          title: req.body.title,
          description: req.body.description,
        }, {new: true}, function(err, createdItem) {
          if(err){
            res
              .status(400)
              .json({error: err});
          } else {
            createdItem.filename = getFullImagePath(req, createdItem.filename)
            res
              .status(200)
              .json({response: createdItem});
          }
        })
      }
    })
    .delete(function(req, res, next){
      const id = req.params.id;
      Portfolio.findByIdAndRemove(id, function(err) {
        if(err){
          res
            .status(400)
            .json({error: err});
        } else {
          res
            .status(200)
            .json({response: 'ok'});
        }
      })
    })
  return router;
}

module.exports = portfolio;
