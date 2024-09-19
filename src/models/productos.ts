import db from '../db/connection';
import { DataTypes } from 'sequelize';

const Producto = db.define('productos', {
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

export default Producto; 