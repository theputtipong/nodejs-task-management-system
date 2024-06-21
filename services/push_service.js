const webPush = require('web-push');

webPush.setVapidDetails(
    'mailto:your_email@gmail.com',
    'your_public_vapid_key',
    'your_private_vapid_key'
);

const sendPush = async (to, title, body) => {
    const payload = JSON.stringify({ title, body });

    await webPush.sendNotification(to, payload);
};

module.exports = { sendPush };
