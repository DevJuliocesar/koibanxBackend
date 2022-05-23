const router = require('express').Router();

const validate = require('../middlewares/validate');
const storeController = require('../controllers/store.controller');
const storeValidation = require('../validations/store.validation');

router.route('/')
  .get(validate(storeValidation.list), storeController.list);

module.exports = router;
