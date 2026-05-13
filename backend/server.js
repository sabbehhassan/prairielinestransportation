require("dotenv").config();

const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contact");
const agreementRoutes = require("./routes/agreementRoutes");

const app = express();

app.use(
  cors({
    origin: ["https://prairielinestransportation.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);


app.use(express.json());

app.use(express.static("public"));

app.use("/api", agreementRoutes);

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Agreement Backend Running");
});
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API Working",
  });
});


// Export the app for Vercel serverless functions
module.exports = app;