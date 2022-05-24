const userService = require('../services/user.service');

const logger = require('../utils/logger');

exports.login = async (req, res, next) => {
  try {
    const {
      username,
      password,
    } = req.body;
    const login = await userService.authenticate(username, password);
    res.status(200).json(login);
  } catch (err) {
    if (err?.status !== 400) {
      logger.error('Error login in auth.controller', err);
    }
    next(err);
  }
};
