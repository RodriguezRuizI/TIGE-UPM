var express = require('express');
var router = express.Router();

router.index = function(req, res){
	var msgAlert="";
	res.render('index', { title: 'MWDEX',msgAlert:msgAlert});
};
/* GET home page. */
router.about = function(req, res){
  res.render('about', { title: 'MWDEX' });
};

module.exports = router;
