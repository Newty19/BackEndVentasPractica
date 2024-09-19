import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ventas_schema','root','bf17b7ad81', {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize;