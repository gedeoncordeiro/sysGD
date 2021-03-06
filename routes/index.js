var express = require('express');
var router = express.Router();
var LoginController = require("../controllers/LoginController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/login", LoginController.index);

module.exports = router;
