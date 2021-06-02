const express = require("express");

const routes = express.Router();

const Question = require("./model/Question");
const Answer = require("./model/Answer");

const QuestionController = require("./controllers/QuestionController");
const AnswerController = require("./controllers/AnswerController");

routes.get("/", QuestionController.index);

routes.get("/questions", QuestionController.show);

routes.get("/question/:id", AnswerController.show);

routes.post("/savequestion", QuestionController.save);

routes.post("/answer", AnswerController.save);

module.exports = routes;