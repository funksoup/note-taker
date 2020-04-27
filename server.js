const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
	console.log("listening");
});






