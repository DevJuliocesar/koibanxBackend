/* eslint-disable no-import-assign */
/* eslint-disable no-undef */

jest.mock('../../../models/user.model');

const userRepository = require('../../../repositories/user.repository');
const User = require('../../../models/user.model');

const parmsMock = {
  username: 'Prueba4',
  password: 'test',
};

const resMock = {
  id: 'test',
  username: 'Prueba4',
  password: 'test',
};

describe('user Repositories', () => {
  test('login: calls next if there are no validation errors', async () => {
    User.findOne.mockImplementation(() => ({
      ...resMock,
      verifyPassword: jest.fn().mockImplementation(() => 'test'),
    }));

    const response = await userRepository.login(parmsMock.username, parmsMock.password);
    expect(response.username).toBe(resMock.username);
  });

  test('login: calls next if there are no validation errors 2', async () => {
    User.findOne.mockImplementation(() => null);

    const response = await userRepository.login(parmsMock.username, parmsMock.password);
    expect(response).toBe(null);
  });

  test('getByUserName: calls next if there are no validation errors', async () => {
    User.findOne.mockImplementation(() => ({
      ...resMock,
      verifyPassword: jest.fn().mockImplementation(() => 'test'),
    }));

    const response = await userRepository.getByUserName(parmsMock.username, parmsMock.password);
    expect(response.username).toBe(resMock.username);
  });
});
