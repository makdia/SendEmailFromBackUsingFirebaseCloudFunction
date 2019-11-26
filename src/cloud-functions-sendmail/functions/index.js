const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'makdia.hussain@sjinnovation.com',
        pass: 'HappySJInnovation2019.'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        const dest = req.query.dest;
        const messagebody = req.query.messagebody;

        const mailOptions = {
            from: 'SJ Health <makdia.hussain@sjinnovation.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: dest,
            subject: 'Your activity report', // email subject
            html: `<p style="font-size: 16px;">Total No of Steps for this week is : <b>`+messagebody+`</b></p>` // email content in HTML
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});
