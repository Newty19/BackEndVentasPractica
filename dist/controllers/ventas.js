"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVenta = exports.postVenta = exports.deleteVenta = exports.getVenta = exports.getVentas = void 0;
const ventas_1 = __importDefault(require("../models/ventas"));
const getVentas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listVentas = yield ventas_1.default.findAll();
    res.json(listVentas);
});
exports.getVentas = getVentas;
const getVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const venta = yield ventas_1.default.findByPk(id);
    if (venta) {
        res.json(venta);
    }
    else {
        res.status(404).json({
            msg: "No existe esa venta"
        });
    }
});
exports.getVenta = getVenta;
const deleteVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const venta = yield ventas_1.default.findByPk(id);
    if (!venta) {
        res.status(404).json({
            msg: `No existe alguna venta con el id ${id}`
        });
    }
    else {
        yield venta.destroy();
        res.json({
            msg: 'La venta fue eliminado con exito'
        });
    }
});
exports.deleteVenta = deleteVenta;
const postVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    yield ventas_1.default.create(body);
    res.json({
        msg: `La venta fue agregada con exito`
    });
});
exports.postVenta = postVenta;
const updateVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const venta = yield ventas_1.default.findByPk(id);
    if (venta) {
        yield venta.update(body);
        res.json({
            msg: "Venta actualizada con exito"
        });
    }
    else {
        res.status(404).json({
            msg: "Venta no existe"
        });
    }
});
exports.updateVenta = updateVenta;
