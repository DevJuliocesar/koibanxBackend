const storeRepository = require('../repositories/store.repository');
const logger = require('../utils/logger');


exports.listStore = async (q, filter = '', sort, dir, skip = 0, max = 10) => {
    // const skip = (page - 1) * limit;
    // const total = await storeRepository.getCount();
    const data = await storeRepository.getStore(q, filter, sort, dir, skip, max);
    return data;
}