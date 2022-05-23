const express = require('express');
const storeRoute = require('./store.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/stores',
    route: storeRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
