
const nodemailer = require('nodemailer');

function sendEmailToManager(userName, date, diners, type, design ) {
    try {
        let transporter = nodemailer.createTransport({

            service: 'gmail',

            auth: {

                user: process.env.MY_EMAIL,
                pass: process.env.MY_EMAIL_PASSWARD

            },
            tls: {
                rejectUnauthorized: false
            }
        });
        // Email content

        let mailOptions = {

            from: process.env.MY_EMAIL,

            to: process.env.EMAIL_TO_SEND,

            subject: 'Test Email',

            text: 'This is a test email from Node.js',
            html: `
            <p  style="direction: rtl; font-family: 'Arial', sans-serif; font-size: 16px; margin-bottom:100px;">
                Name: ${userName}<br>
                Date: ${date}<br>
                Diners: ${diners}<br>
                Type: ${type}<br>
                Design: ${design}

            </p>
            
        `,
        };


        // Send the email

        try {
            transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            // Handle authentication errors
            if (error.code === 'EAUTH') {
                console.error('Invalid login credentials. Please check your Gmail username and password.');
            }
        }

    } catch (error) {
        console.error('Error creating transporter:---', error);
    }
}
//try git
//


module.exports = sendEmailToManager;