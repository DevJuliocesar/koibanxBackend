const User = require('../models/user.model');

exports.login = async (username, password) => {
  const user = await this.getByUserName(username);
  if (!user) {
    return null;
  }
  return user.verifyPassword(password);
};

exports.getByUserName = async (username) => User.findOne({ username });
