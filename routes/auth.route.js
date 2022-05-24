const router = require('express').Router();

const validate = require('../middlewares/validate');
const authController = require('../controllers/auth.controller');
const authValidation = require('../validations/auth.validation');

router.route('/login')
  .post(validate(authValidation.login), authController.login);

module.exports = router;
