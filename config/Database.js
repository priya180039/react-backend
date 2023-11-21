import { Sequelize } from "sequelize";

const db = new Sequelize('cleauve_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
