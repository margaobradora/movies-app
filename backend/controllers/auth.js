const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

//@acces public
exports.login = (req, res, next) => {};

//@acces NOT public
exports.logout = (req, res, next) => {};

//@acces public
exports.register = (req, res, next) => {};

//@acces NOT public
exports.getUser = (req, res, next) => {};
