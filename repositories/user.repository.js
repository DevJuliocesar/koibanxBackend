const User = require('../models/user.model');

exports.login = async (username, password) => {
  const user = await this.getByUserName(username);
  if (user && user.verifyPassword(password)) {
    return user;
  }

  return null;
};

exports.getByUserName = async (username) => User.findOne({ username });
