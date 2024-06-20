const twilio = require('twilio');

const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const client = new twilio(accountSid, authToken);

const sendSms = async (to, message) => {
    await client.messages.create({
        body: message,
        to: to,
        from: 'your_twilio_number'
    });
};

module.exports = { sendSms };
