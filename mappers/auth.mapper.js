const logger = require('../utils/logger');

const mapAuthModelToDto = (model) => ({
  id: model._id,
  name: model.username,
  token: Buffer.from(`${model.username}:${model.password}`).toString('base64'),
});

const collectionAuthModelsToDto = (auth) => auth.map((a) => mapAuthModelToDto(a));

exports.login = (func) => async (...args) => {
  try {
    const result = await func(...args);
    if (!result) return null;
    return collectionAuthModelsToDto([result]);
  } catch (err) {
    logger.error(err.message || 'Error in login of auth mapper');
    throw new Error(err.message || 'Internal Error');
  }
};
