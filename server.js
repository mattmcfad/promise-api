var express = require('express'),
bodyParser = require("body-parser"),
app = express();

app.use(bodyParser.json()); // for parsing application/json

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/api/:id", function(req, res) {

    var id = req.params.id;
    var responses = {
      1: "Flour",
      2: "Milk",
      3: "Eggs",
      4: "Sugar",
      5: "Mix"
    };

    if (id === 'error') {
      setTimeout(function() {
        res.status(400).send('error!!!');
      }, 1000)
    } else {
      var requestDelay = Math.random() * 1000;

      setTimeout(function() {
        res.json(responses[id]);
      }, requestDelay);
    }
  });

app.get("/api/product/:id", function(req, res) {
  var id = req.params.id;

  var products = {
    1: {name: "Radeon 7870 CrossFire"},
    2: {name: "GTX 680"},
    3: {name: "Radeon 9900"},
    4: {name: "GTX TITAN"},
    5: {name: "GTX 720 SLI"},
    6: {name: "Radeon 9999"}
  };

  setTimeout(function() {
    res.json(products[id]);
  }, id * 550);
});

app.get("/api/productReviews/:id", function(req, res) {
  var id = req.params.id;

  var productReviews = {
    1: {review: "5 Stars"},
    2: {review: "4 Stars"},
    3: {review: "3 Stars"},
    4: {review: "2 Stars"},
    5: {review: "3 Stars"},
    6: {review: "4.5 Stars"}
  }
  setTimeout(function() {
    res.json(productReviews[id]);
  }, id * 750);

});

app.listen(8888, function() {
  console.log("started server 8888");
});
