/* eslint-disable no-import-assign */
/* eslint-disable no-undef */
const httpMocks = require('node-mocks-http');
const validator = require('express-validator');

const validate = require('../../../middlewares/validate');
const authValidation = require('../../../validations/auth.validation');

jest.mock('express-validator', () => ({
  checkSchema: jest.fn().mockReturnValue([
    {
      run: jest.fn(),
    },
  ]),
  validationResult: jest.fn(() => ({ isEmpty: () => true })),
}));

describe('Validator Middleware', () => {
  it('calls next if there are no validation errors', async () => {
    const request = httpMocks.createRequest();
    const response = httpMocks.createResponse();
    const next = jest.fn(() => ({ isEmpty: () => false }));

    await validate(authValidation.login)(request, response, next);
    expect(response.statusCode).toBe(200);
    expect(next).toBeCalled();
  });
});
