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

const message = {
  from: emailFrom, // sender address
  to: emailTo, // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>", // html body
};

const  sendEmail = function(router){
  router
    .route('/sendEmail')
    .get(function(req, res, next){
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

    })
  return router;
}


module.exports = sendEmail;
