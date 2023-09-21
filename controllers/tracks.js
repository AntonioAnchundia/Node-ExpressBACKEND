const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError} = require("../utils/handleError");
/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({});
        res.send({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEMS");
    }
};

/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => { 
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findById(id);
        res.send({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEM");
    }
}

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
    try {
        const body = matchedData(req) //basicamente devuelve la dat limpia, si el usuario manda mas propiedades, este solo acepta y guarda las propiedades que son
        //const { body } = req // o const body = req.body 
        const data = await tracksModel.create(body)
        res.send({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEMS");
    }
}

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req); // Obtiene el ID y el cuerpo de la solicitud
        const data = await tracksModel.findOneAndUpdate(
            { _id: id }, // Filtra por el campo "_id" usando el ID proporcionado
            body, // Actualiza con los datos del cuerpo de la solicitud
            { new: true } // Esto devuelve el documento actualizado en lugar del antiguo
        );
        res.send({ data });
    } catch (e) {
        console.log(e);
        handleHttpError(res, "ERROR_UPDATE_ITEMS");
    }
}


/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const  deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.deleteOne({_id: id});
        res.send({ data })
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_ITEM");
    }
 }

 


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }