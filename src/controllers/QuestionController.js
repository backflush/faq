const Question = require("../model/Question");
const Answer = require("../model/Answer");

module.exports = {
    index(req, res){
        Question.findAll({
            raw: true,
            order: [
                ["id", "DESC"] // ACS = crescente | DESC = decrescente
            ]
        }).then((questions) => {
            res.render("index", {
                questions: questions
            });
        });
    },

    show(req, res) {
        res.render("questions");
    },

    save(req, res) {
        const title = req.body.title;
        const description = req.body.description;
    
        Question.create({
            title: title,
            description: description
        }).then(() => {
            res.redirect("/");
        });
    },

}