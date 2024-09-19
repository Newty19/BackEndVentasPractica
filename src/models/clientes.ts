import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Cliente = db.define('clientes', {
    nombre: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    tipoCliente: {
        type: DataTypes.NUMBER
    },
    fecha: {
        type: DataTypes.STRING
    }
    
}, {
    createdAt: false,
    updatedAt: false
});

export default Cliente;