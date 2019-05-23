var friendsData = require("../data/friends");


module.exports = function(app) {
    // API GET Requests
  
    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });
  
   
  
    // API POST Requests
  
    app.post("/api/friends", function(req, res) {
      if (friendsData.length < 5) {
        friendsData.push(req.body);
        res.json(true);
      }
      
    });
  
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!
  
    app.post("/api/clear", function(req, res) {
      // Empty out the arrays of data
      friendsData.length = 0;
  
      res.json({ ok: true });
    });
  };
  