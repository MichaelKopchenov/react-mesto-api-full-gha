const jwt = require('jsonwebtoken');

const { SOME_SECRET_KEY } = process.env;
const UnauthorizedError = require('../errors/UnauthorizedError');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnauthorizedError('Необходима авторизация!'));
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, SOME_SECRET_KEY);
  } catch (err) {
    return next(new UnauthorizedError('Необходима авторизация!'));
  }

  req.user = payload;

  next();
};
