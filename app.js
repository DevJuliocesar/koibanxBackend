const bodyParser = require('body-parser');
const app = require('express')();
const logger = require('./utils/logger');
const { port } = require('./config/default');
const mongoose = require('./config/mongoose');
const routes = require('./routes');
const initializer = require('./utils/initializer');

mongoose.connect();
initializer.init();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount api routes
app.use('/api', routes);

// Error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error.',
    },
  });
});

// Start the server
app.listen(port);
logger.info(`API initialized on port ${port}`);

module.exports = app;
