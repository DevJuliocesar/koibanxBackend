/* eslint-disable no-import-assign */
/* eslint-disable no-undef */

jest.mock('../../../models/store.model');

const storeRepository = require('../../../repositories/store.repository');
const Store = require('../../../models/store.model');

const parmsMock = {
  q: {},
  filter: 'prueba',
  sort: 'test',
  dir: 'test',
  skip: 1,
  max: 10,
  page: 1,
  limit: 10,
};

const parmsMock2 = {
  q: null,
  filter: null,
  sort: null,
  dir: null,
  skip: null,
  max: null,
  page: 1,
  limit: 10,
};

describe('Store Service', () => {
  test('list: calls next if there are no validation errors', async () => {
    Store.find.mockImplementation(() => ({
      skip: jest.fn().mockImplementation(() => ({
        limit: jest.fn().mockImplementation(() => ({
          sort: jest.fn().mockImplementation(() => 'test'),
        })),
      })),
    }));

    const {
      q,
      filter,
      sort,
      dir,
      skip,
      max,
      page,
      limit,
    } = parmsMock;

    const response = await storeRepository.list(
      q,
      filter,
      sort,
      dir,
      skip,
      max,
      page,
      limit,
    );
    expect(response).toBe('test');
  });

  test('list: calls next if there are no validation errors 2', async () => {
    const {
      q,
      filter,
      sort,
      dir,
      skip,
      max,
      page,
      limit,
    } = parmsMock2;

    Store.find.mockImplementation(() => ({
      skip: jest.fn().mockImplementation(() => ({
        limit: jest.fn().mockImplementation(() => ({
          sort: jest.fn().mockImplementation(() => 'test'),
        })),
      })),
    }));

    const response = await storeRepository.list({
      q,
      filter,
      sort,
      dir,
      skip,
      max,
      page,
      limit,
    });
    expect(response).toBe('test');
  });

  test('getCount: calls next if there are no validation errors', async () => {
    Store.find.mockImplementation(() => ({
      countDocuments: jest.fn().mockImplementation(() => 'test'),
    }));

    const response = await storeRepository.getCount();
    expect(response).toBe('test');
  });

  test('create: calls next if there are no validation errors', async () => {
    Store.create.mockImplementation(() => 'test');

    const response = await storeRepository.create('test');
    expect(response).toBe('test');
  });
});
