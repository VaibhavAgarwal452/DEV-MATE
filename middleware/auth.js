const jwt = require('jsonwebtoken');
const config = require('config');
const { json } = require('express');

module.exports = function (req, res, next) {
  // Get Token from header
  const token = req.header('x-auth-token');

  if (!token) {
    res.status(401).json({ msg: 'No token, authorization denied' });
  }

  const decoded = jwt.verify(token, config.get('jwtSecret'));
  req.user = decoded.users;
  console.log(req.user + 'cudlbv');
  next();
};
