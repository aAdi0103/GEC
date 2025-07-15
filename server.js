const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");

// Tell Express where your EJS templates are
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index"); // This renders views/index.ejs
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
