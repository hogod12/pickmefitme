var express = require('express');
var router = express.Router();

const controller = require('../controller/admin');

router.get('/', controller.Main);
router.get('/install', controller.Install);

module.exports = router;
