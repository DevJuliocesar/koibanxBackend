/* eslint-disable no-import-assign */
/* eslint-disable no-undef */

jest.mock('../../../repositories/store.repository');

const storeService = require('../../../services/store.service');
const storeRepository = require('../../../repositories/store.repository');

const parmsMock = {
  filter: 'prueba',
  page: 1,
  limit: 10,
};

const parmsMock2 = {
  filter: 'prueba',
  skip: 1,
  max: 10,
};

const resMock = {
  name: 'Prueba4',
  cuit: '86-27933427-2',
  currentBalance: '1234',
  active: true,
  lastSale: '2018-10-15 14:00:00',
  concepts: [
    'datoPrueba',
  ],
};

describe('Store Service', () => {
  test('list: calls next if there are no validation errors', async () => {
    storeRepository.list.mockResolvedValue([resMock]);
    storeRepository.getCount.mockResolvedValue(2);

    const response = await storeService.list(parmsMock);
    expect(response.pages).toBe(1);
  });

  test('list: calls next if there are no validation errors', async () => {
    storeRepository.list.mockResolvedValue([resMock]);
    storeRepository.getCount.mockResolvedValue(2);

    const response = await storeService.list(parmsMock2);
    expect(response.pages).toBe(1);
  });

  test('list: Error internal error', async () => {
    const error = new Error('Test error message');
    error.status = 500;

    storeRepository.list.mockResolvedValue(null);
    storeRepository.getCount.mockResolvedValue(null);

    await storeService.list(parmsMock).catch((err) => {
      expect(err.message).toBe('Internal Error');
    });
  });

  test('create: calls next if there are no validation errors', async () => {
    storeRepository.create.mockResolvedValue(resMock);

    const response = await storeService.create(resMock);
    expect(response.status).toBe(201);
  });

  test('create: Error internal error', async () => {
    const error = new Error('Test error message');
    error.status = 500;

    storeRepository.create.mockRejectedValue('error');

    await storeService.create(parmsMock).catch((err) => {
      expect(err.message).toBe('Internal Error');
    });
  });

  test('create: Error test', async () => {
    const error = new Error('Test error message');
    error.status = 500;

    storeRepository.create.mockRejectedValue({ message: 'test' });

    await storeService.create(parmsMock).catch((err) => {
      expect(err.message).toBe('test');
    });
  });
});
