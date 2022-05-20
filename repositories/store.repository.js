const Store = require('../models/store.model');

exports.getStore = async (q, sort, page = 1, limit = 10) => {
    return datos = await Store.find(q);
}