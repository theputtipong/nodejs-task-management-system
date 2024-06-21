const express = require('express');
const { sendEmailNotification, sendSmsNotification, sendPushNotification } = require('../controllers/notification_controller');
const router = express.Router();

router.post('/email', sendEmailNotification);
router.post('/sms', sendSmsNotification);
router.post('/push', sendPushNotification);

module.exports = router;
