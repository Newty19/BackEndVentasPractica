"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventas_1 = require("../controllers/ventas");
const router = (0, express_1.Router)();
router.get('/', ventas_1.getVentas);
router.get('/:id', ventas_1.getVenta);
router.delete('/:id', ventas_1.deleteVenta);
router.post('/', ventas_1.postVenta);
router.put('/:id', ventas_1.updateVenta);
exports.default = router;
