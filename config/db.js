const mongoose = require("mongoose");

const url =
"mongodb+srv://preshy:preshy@cluster0.e2k2p.mongodb.net/DiaryApp?retryWrites=true&w=majority"

mongoose.connect(url).then(() => {
	console.log("database now connected...!");
});

module.exports = mongoose;