const nodemailer = require("nodemailer");
const emailFrom = 'wolek4004@gmail.com';
const emailTo = 'wolek4004@gmail.com';


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: emailFrom, // generated ethereal user
    pass: 'gynslhrnzodtraki' // generated ethereal password
  }
});



const  sendEmail = function(router){
  router
    .route('/sendEmail')
    .post(function(req, res, next){
      if(req.body){

        const message = {
          from: emailFrom, // sender address
          to: emailTo, // list of receivers
          subject: `Wiadomość ze strony od ${req.body.userName}`,
          text: req.body.userMessage,
          html: `<p>Odpowiedź do: <b>${req.body.userEmail}</b></p><p>Wiadomość: <b>${req.body.userMessage}</b></p>`
        };

        transporter.sendMail(message, function(error, success){
          if(error){
            res
            .status(40)
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
