const storeRepository = require('../repositories/store.repository');
const storeMapper = require('../mappers/store.mapper');

exports.listStore = async (parms) => {
  const {
    q,
    filter,
    sort,
    dir,
    skip,
    max,
  } = parms;
  let { page = 1, limit = 10 } = parms;

  const getStoreDto = storeMapper.list(storeRepository.getStore);
  const data = await getStoreDto(q, filter, sort, dir, skip, max, page, limit);
  const total = await storeRepository.getCount();

  if (!data || !total) {
    const error = new Error('Error interno');
    error.status = 500;
    throw error;
  }

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
