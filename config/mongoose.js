const mongoose = require('mongoose');
const { mongodb } = require('./default');
const logger = require('../utils/logger');

mongoose.Promise = Promise;

mongoose.connection.on('error', (err) => {
  logger.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

/**
 * Connect to mongo db
 * @returns {object} Mongoose connection
 * @public
 */
exports.connect = () => {
  mongoose
    .connect(`mongodb://${mongodb.address}/${mongodb.dbname}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => logger.info('mongoDB connected...'));
  return mongoose.connection;
};