var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burgers.insertOne([
    "burger_name", "devoured_bool"
  ], [
    req.body.burger_name, false
  ], function() {
    res.redirect("/");
  });
});

router.post("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burgers.updateOne({
    devoured_bool: req.body.devoured
  }, condition, function(data) {
    res.redirect("/");
  });
});
// Export routes for server.js to use.
module.exports = router;
