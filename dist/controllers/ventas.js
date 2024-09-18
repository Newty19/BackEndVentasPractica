"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVenta = exports.postVenta = exports.deleteVenta = exports.getVenta = exports.getVentas = void 0;
const getVentas = (req, res) => {
    res.json({
        msg: 'Obtener venta'
    });
};
exports.getVentas = getVentas;
const getVenta = (req, res) => {
    res.json({
        msg: 'Obtener venta',
        id: req.params.id
    });
};
exports.getVenta = getVenta;
const deleteVenta = (req, res) => {
    res.json({
        msg: 'delete venta',
        id: req.params.id
    });
};
exports.deleteVenta = deleteVenta;
const postVenta = (req, res) => {
    res.json({
        msg: 'post venta',
        body: req.params.body
    });
};
exports.postVenta = postVenta;
const updateVenta = (req, res) => {
    res.json({
        msg: 'update venta',
        id: req.params.id,
        body: req.params.body
    });
};
exports.updateVenta = updateVenta;
