var express = require("express");
var router = express.Router();

router.get('/hasAttributes', async(req, res) => {
	res.send(req.authInfo.hasAttributes());
});

router.get('/hasCountry', async(req, res) => {
	res.send(req.authInfo.getAttribute('COUNTRY'));
});

module.exports = router;