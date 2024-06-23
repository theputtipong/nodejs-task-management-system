const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (to, subject, body) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_AUTH_USER,
      pass: process.env.NODEMAILER_AUTH_PASS,
    },
  });

  let mailOptions = {
    from: "task_mgmt_system <your_email@gmail.com>",
    to: to,
    subject: subject,
    text: body,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
