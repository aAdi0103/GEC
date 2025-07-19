const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

// ✅ Contact form route with Nodemailer
app.post("/submit-form", async (req, res) => {
  const { name, email, mobile, remark } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amantoma700@gmail.com", // your email
      pass: "idht ietm hgqc zgml",   // Gmail app password
    },
  });

  let mailOptions = {
    from: `"Admission Inquiry" <amantoma700@gmail.com>`,
    to: "amantoma700@gmail.com",
    subject: "New Admission Inquiry",
    html: `
      <h3>Contact Details</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Remark:</strong><br>${remark}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.redirect(`/Connect?success=true&name=${encodeURIComponent(name)}`);
  } catch (error) {
    console.error("Error sending email:", error);
    res.redirect("/Connect?success=false");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
