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
        isInt: {
            options: [['name', 'cuit']],
            errorMessage: 'Sort should be "name" or "cuit"',
        }
    },
    dir: {
        optional: true,
        isNumeric: {
            errorMessage: 'Dir should be numeric'
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