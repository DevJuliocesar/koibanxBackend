const storeService = require('../services/store.service');

const logger = require('../utils/logger');

exports.listStore = async (req, res, next) => {
    try {
        const { q, sort, page, limit } = req.query;
        const stores = await storeService.listStore(q, sort, page, limit);

        res.status(200).json(stores);
    } catch (err) {
        logger.error('Error listStore', err);
        next(err);
    }
    
}