const userRepository = require('../repositories/user.repository');
const authMapper = require('../mappers/auth.mapper');

/**
 * It then calls the login function in the userRepository and
 * takes a username and password as parameters.
 * @param {string} username
 * @param {string} password
 * @returns {boolean} ifExistUser
 */
exports.authenticate = async (username, password) => {
  const getLoginDto = authMapper.login(userRepository.login);
  const data = await getLoginDto(username, password);
  if (!data) {
    const error = new Error('Error authenticate');
    error.status = 400;
    throw error;
  }
  return {
    status: 200,
    message: 'User Authenticate',
    user: data[0],
  };
};

/**
 * Exporting a function that is async and takes a username as a parameter.
 * It then calls the getByUserName function in the userRepository and
 * passes in the username.
 *
 * @param {string} username
 */
exports.getByUserName = async (username) => userRepository.getByUserName(username);
