const db = require('../lib/dbConnect');

//get all movies
module.exports = {

function getAllMovies(req, res, next) {
    db.any('SELECT * FROM movies;')
      .then((movies) => {
        res.rows = movies;
        next();
      })
      .catch(error => next(error));
  },

// get movie
module.exports = {

function getMovie(req, res, next) {
    db.one('SELECT * FROM movies;')
      .then((movies) => {
        res.rows = movies;
        next();
      })
      .catch(error => next(error));
  },

// update movie
module.exports = {

function updateMovies(req, res, next) {
    db.any('SELECT * FROM movies;')
      .then((movies) => {
        res.rows = movies;
        next();
      })
      .catch(error => next(error));
  },

// delete movie
  module.exports = {

 function deleteMovie(req, res, next) {
    db.any('SELECT * FROM movies;')
      .then((movies) => {
        res.rows = movies;
        next();
      })
      .catch(error => next(error));
  },

  // get all movies with ratings (bonus)
  module.exports = {

 function getAllMoviesWithRatings(req, res, next) {
    db.any('SELECT * FROM movies;')
      .then((movies) => {
        res.rows = movies;
        next();
      })
      .catch(error => next(error));
  },
// Your middleware MUST allow limit and offset to be sent

// via query parameters to the db for filtering

// default limit
const limit = 10;
// default offset
const offset = 0;


module.exports = {
  getAllMovies,
  getMovie,
  updateMovie,
  deletemovie,
  getAllMoviesWithRatings
};
