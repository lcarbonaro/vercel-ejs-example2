const express = require("express");
const app = express();

app.set('view engine', 'ejs'); // Set EJS as the view engine

//app.set('views', 'views'); // Specify the directory where EJS templates are located
app.set("views", __dirname + "/views");


app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/hello", (req, res) => {
    res.render('index');
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;