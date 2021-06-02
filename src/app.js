const express = require("express");
const path = require("path");

const Question = require("./model/Question");
const Answer = require("./model/Answer");

const connection = require("./database/config");

const routes = require("./routes");

const app = express();

connection.authenticate().then(() => {
    console.log("It's OK!");
}).catch((error) => {
    console.log(`An error occurred! This's it: ${error}`);
});

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.use(routes);

app.listen(3000, () => {
    console.log("Running...");
});