const express = require("express");
const router = express.Router();
const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/tracks')

router.get("/", getItems)
router.get(":id", getItem)
router.post("/", createItem)
router.put("/", updateItem)
router.delete("/", deleteItem)

module.exports = router