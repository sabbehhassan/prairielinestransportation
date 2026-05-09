require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const contactRoutes = require("./routes/contact");
const agreementRoutes = require("./routes/agreementRoutes");

const app = express();

app.use(
  cors({
    origin: true, // Reflects the request origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);


app.use(bodyParser.json());

app.use(express.static("public"));

app.use("/api", agreementRoutes);

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Agreement Backend Running");
});


// Export the app for Vercel serverless functions
module.exports = app;