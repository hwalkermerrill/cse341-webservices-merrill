// Required Imports (Core-Middleware-Routes-Models-Utils)
const dotenv = require('dotenv').config();
const express = require("express");
// const session = require("express-session");
const path = require("path");
const Joi = require('joi');
const mongoose = require('./DataBase/connection');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

// Constants
const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || "production";

// App Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Dev logging for troubleshooting
const devLogs = (req, res, next) => {
	const isDev = res.locals.NODE_ENV === "development";

	if (isDev && !req.path.startsWith("/.")) {
		console.log(`INCOMING: ${req.method} ${req.url}`);
	}

	res.on("finish", () => {
		if (!isDev) return;

		if (Object.keys(req.query).length > 0) {
			console.log("Query:", req.query);
		}
		if (Object.keys(req.params).length > 0) {
			console.log("Params:", req.params);
		}
		console.log(`Response Status: ${res.statusCode}`);
	});

	next();
};

app.use(devLogs)

// Routes
app.use('/', require('./routes/index'));

// Start Server
mongoose.connection.once('open', () => {
	app.listen(PORT, async () => {
		console.log(`Server is running on http://127.0.0.1:${PORT}`);
	});
});