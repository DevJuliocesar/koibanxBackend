/* eslint-disable no-import-assign */
/* eslint-disable no-undef */

jest.mock('../../../services/user.service');

const httpMocks = require('node-mocks-http');

const userService = require('../../../services/user.service');
const { auth } = require('../../../middlewares/auth');

describe('Auth Middleware', () => {
  test('calls next if there are no validation errors', async () => {
    const request = httpMocks.createRequest();
    request.headers = {
      authorization: 'Basic 123',
    };
    const response = httpMocks.createResponse();
    const next = jest.fn();

    userService.authenticate.mockResolvedValue('test');

    await auth(request, response, next);
    expect(response.statusCode).toBe(200);
    expect(next).toBeCalled();
  });

  test('Error 401 Invalid Authentication Credentials', async () => {
    const request = httpMocks.createRequest();
    request.headers = {
      authorization: 'Basic 123',
    };
    const response = httpMocks.createResponse();
    const next = jest.fn();

    userService.authenticate.mockRejectedValue(new Error('Test error message'));

    await auth(request, response, next);
    expect(response.statusCode).toBe(401);
    expect(next).not.toBeCalled();
  });

  test('Error 401 without authorization', async () => {
    const request = httpMocks.createRequest();
    const response = httpMocks.createResponse();
    const next = jest.fn();

    await auth(request, response, next);
    expect(response.statusCode).toBe(401);
    expect(next).not.toBeCalled();
  });
});
