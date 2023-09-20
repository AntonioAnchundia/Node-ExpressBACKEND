const express = require("express");
const router = express.Router();
const { validatorCreateItem } = require("../validators/tracks");
const customHeader = require("../middleware/customHeader")
const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/tracks')

router.get("/", getItems)
router.get(":id", getItem)
router.post("/", validatorCreateItem, customHeader ,createItem)
router.put("/", updateItem)
router.delete("/", deleteItem)

module.exports = router