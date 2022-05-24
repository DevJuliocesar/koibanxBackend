/* eslint-disable no-import-assign */
/* eslint-disable no-undef */

jest.mock('../../../repositories/user.repository');

const userService = require('../../../services/user.service');
const userRepository = require('../../../repositories/user.repository');

const parmsMock = {
  username: 'Prueba4',
  password: 'test',
};

const resMock = {
  id: 'test',
  username: 'Prueba4',
  password: 'test',
};

describe('user Service', () => {
  test('authenticate: calls next if there are no validation errors', async () => {
    userRepository.login.mockResolvedValue(resMock);

    const response = await userService.authenticate(parmsMock.username, parmsMock.password);
    expect(response.status).toBe(200);
  });

  test('authenticate: Error authenticate', async () => {
    userRepository.login.mockResolvedValue(null);

    await userService.authenticate(parmsMock.username, parmsMock.password)
      .catch((err) => {
        expect(err.message).toBe('Error authenticate');
      });
  });

  test('authenticate: Error internal error', async () => {
    userRepository.login.mockRejectedValue(resMock);

    await userService.authenticate(parmsMock.username, parmsMock.password)
      .catch((err) => {
        expect(err.message).toBe('Internal Error');
      });
  });

  test('getByUserName: calls next if there are no validation errors', async () => {
    userRepository.getByUserName.mockResolvedValue(resMock);

    const response = await userService.getByUserName('test');
    expect(response).toBe(resMock);
  });
});
