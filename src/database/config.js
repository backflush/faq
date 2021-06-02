const Sequelize = require("sequelize");

const connection = new Sequelize("faq", "root", "1629", {
    host: "localhost",
    dialect: "mysql",
    port: 3308
});

module.exports = connection;