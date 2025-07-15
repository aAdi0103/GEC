const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("HomePage", { currentRoute: "home" });
});

app.get("/AboutUs", (req, res) => {
  res.render("AboutUs", { currentRoute: "about" });
});

app.get("/StudyAbroad", (req, res) => {
  res.render("StudyAbroad", { currentRoute: "abroad" });
});

app.get("/StudyInIndia", (req, res) => {
  res.render("StudyInIndia", { currentRoute: "india" });
});

app.get("/Connect", (req, res) => {
  res.render("Connect", { currentRoute: "contact" });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
