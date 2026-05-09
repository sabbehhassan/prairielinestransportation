require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const contactRoutes = require("./routes/contact");
const agreementRoutes = require("./routes/agreementRoutes");

const app = express();

const allowedOrigins = [
  "https://loblawtransportus-9acv.vercel.app"
];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps, curl, etc.)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// Handle preflight requests for all routes
app.options("*", cors());

app.use(bodyParser.json());

app.use(express.static("public"));

app.use("/api", agreementRoutes);

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Agreement Backend Running");
});


// Export the app for Vercel serverless functions
module.exports = app;