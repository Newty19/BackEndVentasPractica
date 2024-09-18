import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Venta = db.define('TestingVentas', {
    cliente: {
        type: DataTypes.STRING
    },
    folio: {
        type: DataTypes.STRING
    },
    fecha: {
        type: DataTypes.STRING
    },
    producto: {
        type: DataTypes.STRING
    },
    cantidad: {
        type: DataTypes.NUMBER
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Venta; 