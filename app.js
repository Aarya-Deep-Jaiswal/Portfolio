const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const contact = require("./models/contact.js");
// const mongoose = require("mongoose");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


// main()
//     .then(res => console.log("connected to DB"))
//     .catch(err => console.log(err));
// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/contact');
// }

app.listen(8080, () => {
    console.log("Listening on port 8080");
});

app.get("/", (req, res) => {
    res.redirect("/home");
})

app.get("/home", (req, res) => {
    // res.send("OnPort");
    res.render("listings/home.ejs");
});

app.get("/about", (req, res) => {
    // res.send("OnPort");
    res.render("listings/about.ejs");
});

app.get("/skills", (req, res) => {
    res.render("listings/skills.ejs");
});

app.get("/edu", (req, res) => {
    res.render("listings/edu.ejs");
});

app.get("/projects", (req, res) => {
    res.render("listings/project.ejs");
});

app.get("/contact", (req, res) => {
    res.render("listings/contact.ejs");
});

app.post("/home", async (req, res) => {
    let { firstName, lastName, email, message } = req.body;
    let newContact = new contact({
        firstName: firstName,
        lastName:lastName,
        email:email,
        message:message,
    });
    console.log(newContact);
    // await newContact.save();
    res.redirect("/home");
})

app.use("*", (req, res) => {
    res.send("Invalid Page!!");
})
