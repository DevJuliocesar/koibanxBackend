/* eslint-disable no-import-assign */
/* eslint-disable no-undef */

jest.mock('../../../services/store.service');

const httpMocks = require('node-mocks-http');

const storeController = require('../../../controllers/store.controller');
const storeService = require('../../../services/store.service');

describe('store Controller', () => {
  test('list: calls next if there are no validation errors', async () => {
    const request = httpMocks.createRequest();
    request.query = {
      filter: 'prueba',
      page: 1,
      limit: 10,
    };
    const response = httpMocks.createResponse();
    const next = jest.fn();

    storeService.list.mockResolvedValue({ test: 'test' });

    await storeController.list(request, response, next);
    expect(response.statusCode).toBe(200);
    expect(response._getData()).toBe(JSON.stringify({ test: 'test' }));
  });

  test('list: Error 500 Internal Error', async () => {
    const request = httpMocks.createRequest();
    request.query = {
      filter: 'prueba',
      page: 1,
      limit: 10,
    };
    const response = httpMocks.createResponse();
    const next = jest.fn();
    const error = new Error('Test error message');
    error.status = 500;

    storeService.list.mockRejectedValue(error);

    await storeController.list(request, response, next);
    expect(next).toBeCalled();
  });

  test('create: calls next if there are no validation errors', async () => {
    const request = httpMocks.createRequest();
    request.body = {
      name: 'Prueba4',
      cuit: '86-27933427-2',
      currentBalance: '1234',
      active: true,
      lastSale: '2018-10-15 14:00:00',
      concepts: [
        1,
        2,
        3,
        'dato2',
      ],
    };
    const response = httpMocks.createResponse();
    const next = jest.fn();

    storeService.create.mockResolvedValue({ test: 'test' });

    await storeController.create(request, response, next);
    expect(response.statusCode).toBe(201);
    expect(response._getData()).toBe(JSON.stringify({ test: 'test' }));
  });

  test('create: Error 500 Internal Error', async () => {
    const request = httpMocks.createRequest();
    request.query = {
      filter: 'prueba',
      page: 1,
      limit: 10,
    };
    const response = httpMocks.createResponse();
    const next = jest.fn();
    const error = new Error('Test error message');
    error.status = 500;

    storeService.create.mockRejectedValue(error);

    await storeController.create(request, response, next);
    expect(next).toBeCalled();
  });
});
