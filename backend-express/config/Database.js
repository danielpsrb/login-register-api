import { Sequelize } from "sequelize";

const db = new Sequelize('your_db_name', 'your_username_db', 'your_password_db', {
    host: 'localhost',
    dialect: 'postgres'
});

export default db;