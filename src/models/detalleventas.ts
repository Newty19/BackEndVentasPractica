import db from '../db/connection';
import { DataTypes } from 'sequelize';

const detalleVenta = db.define('detalleventas', {
    venta: {
        type: DataTypes.NUMBER
    },
    Producto: {
        type: DataTypes.NUMBER
    },
    cantidad: {
        type: DataTypes.NUMBER
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default detalleVenta; 