"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detalleventas_1 = require("../controllers/detalleventas");
const router = (0, express_1.Router)();
router.post('/', detalleventas_1.postDetalleVenta);
exports.default = router;
