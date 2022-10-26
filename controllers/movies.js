const Movie = require('../models/movie');
const ForbiddenError = require('../errors/ForbiddenError');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');

const createMovie = (req, res, next) => {
  const {
    country, director, duration, year, description, image, trailerLink,
    thumbnail, owner = req.user._id, movieId, nameRU, nameEN,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movie) => {
      res.send(movie);
    })
    .catch((error) => {
      if (error.name === 'ValidationError') {
        next(new BadRequestError('Данные некорректны'));
      } else {
        next(error);
      }
    });
};

const getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => {
      res.send(movies);
    })
    .catch(next);
};

const deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .orFail(() => {
      throw new NotFoundError('Фильм не найден');
    })
    .then((result) => {
      if (result.owner.toString() === req.user._id) {
        Movie.findByIdAndRemove(req.params.movieId)
          .then(() => res.send({ message: 'Фильм удален успешно' }))
          .catch(next);
      } else {
        next(new ForbiddenError('Удалить данный фильм невозможно. Вы не являетесь его создателем'));
      }
    })
    .catch(next);
};

module.exports = { createMovie, getMovies, deleteMovie };
