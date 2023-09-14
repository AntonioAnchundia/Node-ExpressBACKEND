const express = require("express");
const router = express.Router();
const uploadMidlleware = require('../utils/handleStorage')
const {createItem} = require("../controllers/storage");

router.post("/", uploadMidlleware.single("myfile") ,createItem);

module.exports = router;