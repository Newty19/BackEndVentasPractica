import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ventas_schema','root','1234', {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize;