const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
	cloud_name: "dlvjkep6k",
	api_key: "676185319535521",
	api_secret: "6y5OI1WuBw-hIVbky0qgBpzhtqY",
	secure: true,
});

module.exports = cloudinary;
