const movieRouter = require('express').Router();
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');
const { createMovieValidation, deleteMovieValidation } = require('../middlewares/validation');

movieRouter.get('/movies', getMovies);
movieRouter.post('/movies', createMovieValidation, createMovie);
movieRouter.delete('/movies/:movieId', deleteMovieValidation, deleteMovie);

module.exports = movieRouter;
