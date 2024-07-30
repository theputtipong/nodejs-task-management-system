const express = require("express");
const { makeConcurrentRequests } = require("../controllers/test_controller");

const router = express.Router();

router.get("/", makeConcurrentRequests);

module.exports = router;
