const { checkSchema } = require('express-validator');

const list = checkSchema({
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
        optional: true
    },
    sort: {
        optional: true,
        isString: {
            options: [['name', 'cuit']],
            errorMessage: 'Sort should be "name" or "cuit"',
        }
    },
    dir: {
        optional: true,
        isString: {
            options: [['asc', 'desc']],
            errorMessage: 'Sort should be "asc" or "desc"',
        }
    },
    skip: {
        optional: true,
        isInt: {
            errorMessage: 'Sort should be "name" or "cuit"',
        },
        toInt: true
    },
    max: {
        optional: true,
        isInt: {
            errorMessage: 'Sort should be "name" or "cuit"',
        },
        toInt: true
    }
}, ['query'])

module.exports = {
    list
}