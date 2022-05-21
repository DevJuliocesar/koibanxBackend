const storeService = require('../services/store.service');

const logger = require('../utils/logger');

exports.list = async (req, res, next) => {
    try {
        const {
            q,
            filter,
            sort,
            dir,
            skip,
            max
        } = req.query;
        const stores = await storeService.listStore(q, filter, sort, dir, skip, max);

        res.status(200).json(stores);
    } catch (err) {
        logger.error('Error listStore', err);
        next(err);
    }

}