const logger = require('../utils/logger');

const formatterPeso = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0,
});

const formatterDate = (date) => date.toLocaleString();

/**
 * It takes a model object and returns a DTO object
 * with some of the model's properties and some of the
 * model's concepts properties.
 *
 * @param model - Object
 * @returns {
 *   id: '5e8f8f8f8f8f8f8f8f8f8f8f',
 *   name: 'Store 1',
 *   cuit: '20-12345678-9',
 *   currentBalance: '$ 1.000',
 *   active: 'Si',
 *   lastSale: '
 */
const mapStoresModelToDto = (model) => {
  const concepts = model.concepts.reduce((a, v, i) => ({ ...a, [`concept${i}`]: v }), {});

  const storeDto = {
    id: model._id,
    name: model.name,
    cuit: model.cuit,
    currentBalance: formatterPeso.format(model.currentBalance),
    active: model.active ? 'Si' : 'No',
    lastSale: formatterDate(model.lastSale),
    ...concepts,
  };

  return storeDto;
};

/**
 * This function takes a collection of stores and returns a collection of store DTOs.
 * @param stores - an array of stores
 * @returns An array of stores DTO.
 */
const collectionStoresModelsToDto = (stores) => stores.map((store) => mapStoresModelToDto(store));

/**
 * A function that takes a function as a parameter and
 * returns a collection Stores Models To Dto.
 *
 * @param  {} func
 */
exports.list = (func) => async (...args) => {
  try {
    const result = await func(...args);
    if (!result) return null;
    return collectionStoresModelsToDto(result);
  } catch (err) {
    logger.error(err.message || 'Error in list of store mapper');
    throw new Error(err.message || 'Internal Error');
  }
};

exports.create = (func) => async (...args) => {
  try {
    const result = await func(...args);
    return collectionStoresModelsToDto([result]);
  } catch (err) {
    logger.error(err.message || 'Error in create of store mapper');
    throw new Error(err.message || 'Internal Error');
  }
};
