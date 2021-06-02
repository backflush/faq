const Sequelize = require("sequelize");

const connection = require("../database/config");

const Answer = connection.define("answers", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    idQuestion: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

Answer.sync( {
    force: false
}).then( () => {});

module.exports = Answer;