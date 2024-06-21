require('dotenv').config();
const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET
});

const sendSMS = (to, text) => {
  const from = 'YourBrand';
  vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
      console.error('Error:', err);
    } else {
      if (responseData.messages[0].status === '0') {
        console.log('Message sent successfully.');
      } else {
        console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
      }
    }
  });
};

module.exports = { sendSMS };
