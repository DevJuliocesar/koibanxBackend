const router = require('express').Router();

const validate = require('../middlewares/validate');
const authMiddleware = require('../middlewares/auth');
const storeController = require('../controllers/store.controller');
const storeValidation = require('../validations/store.validation');

router.route('/')
  .get(authMiddleware.auth, validate(storeValidation.list), storeController.list)
  .post(authMiddleware.auth, validate(storeValidation.create), storeController.create);

module.exports = router;
