let nodemailer = require('nodemailer');
const config = require('config')
function sendmessage(){
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.get('user'),
    pass: config.get('pass')
  }
});
setTimeout(() => {
let mailOptions = {
  from: 'xyz@gmail.com',
  to: 'xyz@gmail.com',
  subject: 'Sending Email using Node.js',
  text: `Hi Awais there `
  // html: '<h1>Hi </h1><p>Your Messsage</p>'        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

    
}, 3000);
}
let interval = 1000;
setInterval( sendmessage, interval); 