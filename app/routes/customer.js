var express = require('express');
var router = express.Router();

const controller = require('../controller/customer');

router.get('/', controller.Main);

router.post('/body', controller.CreateBody);

router.put('/body', controller.UpdateBody);

router.delete('/body', controller.DeleteBody);

module.exports = router;
