const storeRepository = require('../repositories/store.repository');
const logger = require('../utils/logger');


exports.listStore = async (q, sort, page = 1, limit = 10) => {
    // const skip = (page - 1) * limit;
    // const total = await storeRepository.getCount();
    logger.info('page', page);
    const data = await storeRepository.getStore(q, sort, page, limit);
    return data;
}