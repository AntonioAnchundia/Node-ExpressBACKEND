const express = require("express");
const router = express.Router();
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const customHeader = require("../middleware/customHeader")
const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/tracks')

/**
 * Lista los items
 */
router.get("/", getItems)

/**
 * Obtener detalle de item
 */
router.get("/:id", validatorGetItem ,getItem)

/**
 * Crear un registro
 */
router.post("/", validatorCreateItem, customHeader ,createItem)

/**
 * Actualizar un registro
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem)

router.delete("/:id", validatorGetItem ,deleteItem)

module.exports = router