const Sequelize = require("sequelize");

const connection = require("../database/config");

const Question = connection.define("questions", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    title: {
        type: Sequelize.STRING,
        allowNull: false
    },

    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
});

Question.sync( {
    force: false
}).then( () => {});

module.exports = Question;