const nodemailer = require('nodemailer');
const fs = require('fs');

function sendEmailToManager(userName,pdfFilePath) {
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
            subject: 'Reservation Details',
            text: 'Reservation details attached.',
            html: `
                <p style="direction: rtl; font-family: 'Arial', sans-serif; font-size: 16px; margin-bottom:100px;">
                    שלום: ${userName}<br>
                    זוהי ההזמנה שביצעת באתר refectory
                    <br>
                    בהצלחה!
                </p>
            `,
            attachments: [
                {
                    filename: 'ReservationDetails.pdf',
                    path: pdfFilePath
                }
            ]
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                // Handle authentication errors
                if (error.code === 'EAUTH') {
                    console.error('Invalid login credentials. Please check your Gmail username and password.');
                }
            } else {
                console.log('Email sent successfully');
            }
        });
    } catch (error) {
        console.error('Error creating transporter:', error);
    }
}

module.exports = sendEmailToManager;
