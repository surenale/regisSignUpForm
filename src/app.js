const express = require('express');
const { template } = require('handlebars');
const path = require('path');
const hbs = require('hbs');
const app = express();

// requiring db connection to main express app
require('./db/conn');

const port = process.env.PORT || 3000

// tell app.js to use static html file 
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

//set handlebars to main express app
app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partial_path);

// make index.hbs as main home page
app.get("/", (req, res) => {
    res.render("index");
})

app.get("/register", (req,res) => {
    res.render("register");
})


app.get("/login", (req,res) => {
    res.render("login");
})


app.listen(port, () => {
    console.log(`listening to port at ${port}`);
})