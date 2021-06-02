const Question = require("../model/Question");
const Answer = require("../model/Answer");

module.exports = {
    show(req, res) {
        const id = req.params.id;
        Question.findOne({
            where: {id: id}
        }).then((question) => {
            if(question != undefined) {
                Answer.findAll({
                    where: {
                        idQuestion: question.id 
                    },
                    
                    order: [
                        ["id", "DESC"],
                    ],
                }).then((answers) => {
                    res.render("question", {
                        question: question,
                        answers: answers
                    });
                });
            } else {
                res.redirect("/");
            }
        });
    },

    save(req, res) {
        const description = req.body.description;
        const idQuestion = req.body.idquestion;

        Answer.create({
            description: description,
            idQuestion: idQuestion,
        }).then(() => {
            res.redirect(`/question/${idQuestion}`);
        });
    }
}