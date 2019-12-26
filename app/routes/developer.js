var express = require('express');
var router = express.Router();

const controller = require('../controller/developer');

router.get('/', controller.Main);

module.exports = router;
