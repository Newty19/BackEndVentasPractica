"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('ventas_schema', 'root', 'bf17b7ad81', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
