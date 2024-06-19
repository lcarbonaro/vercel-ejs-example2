const express = require("express");
const path = require("path");

const app = express();

app.set('view engine', 'ejs'); 

// lots of trial and error on this one
// what finally worked was to move
// views folder right inside api folder
//app.set("views", path.join(__dirname, "views"));

/*
or move views folder back out
and add functions includeFiles to vercel.json
and comment out above app.set("views"...
*/


app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/hello", (req, res) => {
    res.render('pages/index', {name:"Tom"});
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;