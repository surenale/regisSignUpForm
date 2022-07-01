const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

// requiring db connection to main express app
require('./db/conn');
const Register = require("./models/registers");
const { urlencoded } = require('express');

const port = process.env.PORT || 3000

// tell app.js to use static html file 
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.use(express.json());// this only can get the data if we use postman for creating new user and this shows undefined
app.use(urlencoded({ extended: false }));// but this is needed of we want to post/create the user using our websites

//set handlebars to main express app
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);

// make index.hbs as main home page
app.get("/", (req, res) => {
    res.render("index");
})

app.get("/register", (req, res) => {
    res.render("register");
})
// create a new user in our database
app.post("/register", async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if (password === cpassword) {
            const registerEmployee = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                password: password,
                confirmpassword: cpassword,
                gender: req.body.gender,
            })
            await registerEmployee.save();
            res.status(201).render("index");
        } else {
            res.send("password not matching");
        }
    } catch (e) {
        res.status(400).send(e);
    }
})


app.get("/login", (req, res) => {
    res.render("login");
})


app.listen(port, () => {
    console.log(`listening to port at ${port}`);
})