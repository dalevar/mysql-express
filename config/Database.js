import { Sequelize } from "sequelize";

const db = new Sequelize('crud_express_db', 'root', '', {
    host: 'localhost',
    // DBMS yang digunakan
    dialect: 'mysql'
});

export default db;