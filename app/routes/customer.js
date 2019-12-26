var express = require('express');
var router = express.Router();

const controller = require('../controller/customer');

router.get('/', controller.Main);

module.exports = router;
