const Movie = require("../models/Movie");
const ErrorResponse = require("../utils/errorResponse");

//@acces public
exports.getAllMovies = (req, res, next) => {
  Movie.find()
    .then((movies) =>
      res.status(200).json({
        success: true,
        movies,
      })
    )
    .catch((error) => next(error));
};

//@acces public
exports.getByCategory = (req, res, next) => {
  const category = req.params.category;
  Movie.find({ category: { $regex: category, $options: "i" } })
    .then((movies) =>
      res.status(200).json({
        success: true,
        movies,
      })
    )
    .catch((error) => next(error));
};

//@acces public
exports.searchByTitle = (req, res, next) => {
  const title = req.query.title;
  Movie.find({ title: { $regex: title, $options: "i" } })
    .then((movies) =>
      res.status(200).json({
        success: true,
        movies,
      })
    )
    .catch((error) => next(error));
};

//@acces public
exports.getMovieById = (req, res, next) => {
  const id = req.params.id;
  Movie.findById(id)
    .then((movie) =>
      res.status(200).json({
        success: true,
        movie,
      })
    )
    .catch((eror) => next(error));
};
