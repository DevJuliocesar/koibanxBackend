const userService = require('../services/user.service');

exports.auth = async (req, res, next) => {
  // check for basic auth header
  if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
    return res.status(401).json({ message: 'Missing Authorization Header' });
  }

  // verify auth credentials
  const base64Credentials = req.headers.authorization.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  // authenticate with credentials
  try {
    const user = await userService.authenticate(username, password);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid Authentication Credentials' });
  }
};
