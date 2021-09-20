const nodemailer = require("nodemailer");
const {emailFrom, emailTo, emailPassword} = require('../config');
const transporter = nodemailer.createTransport({
   service: 'Gmail', // no need to set host or port etc.
   auth: {
       user: emailFrom,
       pass: emailPassword,
   }
});

const sendEmail = function (router){
  router
    .route('/sendEmail')
    .post(function(req, res, next){
      if(req.body){

        const message = {
          from: emailFrom,
          to: emailTo,
          subject: `Wiadomość ze strony od ${req.body.userName}`,
          text: req.body.userMessage,
          html: `<p>Odpowiedź do: <b>${req.body.userEmail}</b></p><p>Wiadomość: <b>${req.body.userMessage}</b></p>`
        };

        transporter.sendMail(message, function(error, success){
          if(error) {
            res
              .status(400)
              .json({error: error});
          }else{
            res
              .status(200)
              .json({response: success});
          }
        })
      }else{
        res
          .status(400)
          .json({error: 'No body'});
      }
    })
  return router;
}

module.exports = sendEmail;
