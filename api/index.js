const express = require("express");
const path = require("path");

const app = express();

app.set('view engine', 'ejs'); 


app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/hello", (req, res) => {
    res.render('index', {name:"Tom"});
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;