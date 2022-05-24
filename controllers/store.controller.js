const storeService = require('../services/store.service');

const logger = require('../utils/logger');

exports.list = async (req, res, next) => {
  try {
    const stores = await storeService.list(req.query);
    res.status(200).json(stores);
  } catch (err) {
    logger.error('Error list in store.controller', err);
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const store = await storeService.create(req.body);
    res.status(201).json(store);
  } catch (err) {
    logger.error('Error create in store.controller', err);
    next(err);
  }
};
