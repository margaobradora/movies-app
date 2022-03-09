const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

//@access public
exports.getAllFavorites = (req, res, next) => {
  User.findOne({ _id: req.user._id })
    .populate("favorites")
    .then((user) =>
      res.status(200).json({
        success: true,
        favorites: user.favorites,
      })
    )
    .catch((error) => next(error));
};

//@access public
exports.addToFavorites = (req, res, next) => {
  let user = req.user;
  let movieId = req.body._id;

  user.favorites.push(movieId);

  user.save(function (error) {
    if (error) {
      next(error);
    } else {
      res.status(201).json({
        success: true,
        id: movieId,
      });
    }
  });
};
