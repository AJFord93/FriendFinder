// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const express = require("express"),
bodyParser = require("body-parser"),
friends = require("./app/data/friends.js");



// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


function bestMatch(){
  let scores = req.body.scores;
  console.log(scores);

  for(var i = 0; i < friends.length; i++){
    let diff = 0;
    for(var j = 0; j < friends[i].scores.length; j++){
      console.log(friends[i].scores);
    }
  }
}

module.exports = bestMatch;
// Get users scores
//compare each element in arrays and find absolute difference
