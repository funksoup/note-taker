var notes = require("../db/db.json");
const path = require("path");
const fs = require('fs');

module.exports = function(app) {

app.get("/api/notes", function(req, res) {
  return res.json(notes);
});

// Create New Characters - takes in JSON input
app.post("/api/notes", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  // var newNote = req.body;

  // We then add the json the user sent to the character array
  notes.push(req.body);

  // We then display the JSON to the users
  res.json(true);

  // append file db.json
  fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), function (err) {
	  if (err) throw err;
	  console.log('New note saved');
  });

});



app.delete("/api/notes/:id", function(req, res) {

	var noteID = req.params.id;
	notes = notes.filter(x => x.id != noteID);

	fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), function (err) {
	  if (err) throw err;
	  console.log('Filtered note saved');
	});

  // We then display the JSON to the users
  res.json(true);

});

	console.log('in api route');
};
