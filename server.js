const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("HomePage"); 
});
app.get("/AboutUs", (req, res) => {
    res.render("AboutUs");
});
app.get("/StudyAbroad", (req, res) => {
    res.render("StudyAbroad");
});
app.get("/StudyInIndia", (req, res) => {
    res.render("StudyInIndia");
});
app.get("/Connet", (req, res) => {
    res.render("Connet"); 
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
