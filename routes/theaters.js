var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var Showtimes = require('showtimes');
  var api = new Showtimes(91504, {});

  api.getTheaters(function (error, theaters) {
    if (error) {
      throw error
    }

    res.send(theaters);
  });

});

module.exports = router;
