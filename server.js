// Required Imports (Core-Middleware-Routes-Models-Utils)
const dotenv = require('dotenv').config();
const express = require("express");
// const session = require("express-session");
const path = require("path");
const Joi = require('joi');
const mongoose = require('./DataBase/connection');

// Constants
const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || "production";

// App Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use('/', require('./routes/index'));

// Start Server
app.listen(PORT, async () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});