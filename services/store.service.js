const storeRepository = require('../repositories/store.repository');
const storeMapper = require('../mappers/store.mapper');
const logger = require('../utils/logger');

/**
 * List Store
 * @param  {} parms
 */
exports.list = async (parms) => {
  const {
    q,
    filter,
    sort,
    dir,
    skip,
    max,
  } = parms;
  let { page = 1, limit = 10 } = parms;

  const getStoreDto = storeMapper.list(storeRepository.list);
  const data = await getStoreDto(q, filter, sort, dir, skip, max, page, limit);
  const total = await storeRepository.getCount(q, filter);

  limit = max || limit;
  page = skip ? Math.trunc(skip / limit + 1) : page;
  const pages = Math.ceil(total / limit);

  return {
    data,
    page,
    pages,
    limit,
    total,
  };
};

exports.create = async (parms) => {
  try {
    const {
      name,
      cuit,
      currentBalance,
      active,
      lastSale,
      concepts,
    } = parms;
    const getStoreDto = storeMapper.create(storeRepository.create);
    const data = await getStoreDto({
      name,
      cuit,
      currentBalance,
      active,
      lastSale,
      concepts,
    });
    logger.info(`Store created with id ${data[0].id}`);
    return {
      status: 201,
      message: 'Created Successfully',
      data,
    };
  } catch (err) {
    throw new Error(err.message || 'Internal Error');
  }
};
