const { checkSchema } = require('express-validator');

exports.list = checkSchema({
  q: {
    optional: true,
    isJSON: {
      errorMessage: 'q is wrong',
    },
    customSanitizer: {
      options: (value) => JSON.parse(value),
    },
  },
  'q.active': {
    optional: true,
    isBoolean: {
      errorMessage: 'Active should be boolean',
    },
  },
  filter: {
    optional: true,
  },
  sort: {
    optional: true,
    isString: {
      options: [['name', 'cuit']],
      errorMessage: 'Sort should be "name" or "cuit"',
    },
  },
  dir: {
    optional: true,
    isString: {
      options: [['asc', 'desc']],
      errorMessage: 'Sort should be "asc" or "desc"',
    },
  },
  skip: {
    optional: true,
    isInt: {
      errorMessage: 'Sort should be Int',
    },
    toInt: true,
  },
  max: {
    optional: true,
    isInt: {
      errorMessage: 'Sort should be Int',
    },
    toInt: true,
  },
  page: {
    optional: true,
    isInt: {
      errorMessage: 'Page should be Int',
    },
    toInt: true,
  },
  limit: {
    optional: true,
    isInt: {
      errorMessage: 'Limit should be Int',
    },
    toInt: true,
  },
}, ['query']);
