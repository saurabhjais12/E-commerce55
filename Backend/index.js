const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const path = require("path");

const connectDB = require("./config/db");
const router = require("./routes/index");

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Frontend URL from .env
    credentials: true, // Allow cookies and credentials
  })
);
app.use(cookieParser());
app.use("/api", router);

const PORT = process.env.PORT || 8002;

// Serve Frontend in Production
if (process.env.NODE_ENV === "production") {
  // __dirname is already available in CommonJS, no need to redefine it
  app.use(express.static(path.join(__dirname, "../Frontend", "dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
  });
}

// Database Connection and Server Start
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("DB Connected");
    console.log(`Server is running on port ${PORT}`);
  });
});
