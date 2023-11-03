// File berisi struktur table bagaimana data kita tersimpan di database
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// Membuat model untuk menampung data
const {DataTypes} = Sequelize;

//
const User = db.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
}, {
    freezeTableName: true
})

export default User;

// fungsi untuk mengenerate/migrasi table jika table tidak terdapat di database
(async () => {
    await db.sync();
})()