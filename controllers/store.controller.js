const storeService = require('../services/store.service');

const logger = require('../utils/logger');

exports.list = async (req, res, next) => {
    try {
        const stores = await storeService.listStore(req.query);

        res.status(200).json(stores);
    } catch (err) {
        logger.error('Error listStore', err);
        next(err);
    }

}