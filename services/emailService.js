const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, body) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your_email@gmail.com',
            pass: 'your_email_password'
        }
    });

    let mailOptions = {
        from: 'your_email@gmail.com',
        to: to,
        subject: subject,
        text: body
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
