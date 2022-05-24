const userRepository = require('../repositories/user.repository');

/**
 * It then calls the login function in the userRepository and
 * takes a username and password as parameters.
 * @param {string} username
 * @param {string} password
 * @returns {boolean} ifExistUser
 */
exports.authenticate = async (username, password) => {
  const user = await userRepository.login(username, password);
  if (!user) throw new Error();
  return user;
};

/**
 * Exporting a function that is async and takes a username as a parameter.
 * It then calls the getByUserName function in the userRepository and
 * passes in the username.
 *
 * @param {string} username
 */
exports.getByUserName = async (username) => userRepository.getByUserName(username);
