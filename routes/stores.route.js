const logger = require('../utils/logger');
const express = require('express');
const router = express.Router();
const storeController = require('../controllers/store.controller');

router.route('/stores')
  .get(function(req,  res, next){
    logger.info("pending validations");
    storeController.listStore(req, res, next)
  }, function(){logger.info("pending use case")});

module.exports = router;
