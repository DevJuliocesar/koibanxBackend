const { checkSchema } = require('express-validator');

exports.login = checkSchema({
  username: {
    optional: false,
    isString: {
      errorMessage: 'username should be String',
    },
  },
  password: {
    optional: false,
    isString: {
      errorMessage: 'password should be String',
    },
  },
}, ['body']);
