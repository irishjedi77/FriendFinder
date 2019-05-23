var express = require("express");
var path = require("path");

var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes //

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home"));
  });

// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "survey.html"));
//   });

// // Displays all friends
// app.get("/api/friends", function(req, res) {
//     return res.json(friends);
//   });
  
//   // Displays a single friend, or returns false
//   app.get("/api/friends/:friends", function(req, res) {
//     var chosen = req.params.friends;
  
//     console.log(chosen);
  
//     for (var i = 0; i < friends.length; i++) {
//       if (chosen === friends[i].routeName) {
//         return res.json(friends[i]);
//       }
//     }
  
//     return res.json(false);
//   });

  apiRoutes(app);
  htmlRoutes(app);

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
