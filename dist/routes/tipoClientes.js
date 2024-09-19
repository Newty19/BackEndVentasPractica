"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoClientes_1 = require("../controllers/tipoClientes");
const router = (0, express_1.Router)();
router.get('/', tipoClientes_1.getTipoClientes);
exports.default = router;
