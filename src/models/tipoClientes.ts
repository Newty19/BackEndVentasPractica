import db from '../db/connection';
import { DataTypes } from 'sequelize';

const tipoCliente = db.define('tipoclientes', {
    clave: {
        type: DataTypes.NUMBER
    },
    descripcion: {
        type: DataTypes.STRING
    }
    
}, {
    createdAt: false,
    updatedAt: false
});

export default tipoCliente;