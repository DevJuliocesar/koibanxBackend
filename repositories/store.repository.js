const Store = require('../models/store.model');

exports.getStore = async (q, filter = '', sort, dir, skip = 0, max = 10) => {
    return datos = await Store.find(q).limit(max);
}