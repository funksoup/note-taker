
const path = require("path");
// bring in instance of 'app'

module.exports = function(app) {
	app.get("/", function(req, res) {
  	res.sendFile(path.join(__dirname, "../public/index.html"));
});

	app.get("/notes", function(req, res) {
  	res.sendFile(path.join(__dirname, "../public/notes.html"));
});

	console.log('in html route');
};

