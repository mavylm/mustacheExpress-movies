const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('movies', { allMovies: movies });
});

router.get('/:movieId', (req, res) => {
  const movieId = parseInt(req.params.movieId);
  let movie = movies.find((movie) => movie.movieId == movieId);
  res.render('id', { movieId: movie });
});

router.get('/genre/:genre', (req, res) => {
  const genre = req.params.genre;
  let filteredMovie = movies.filter(
    (movie) => movie.genre.toLowerCase() == genre.toLowerCase()
  );
  res.render('genre', { movieGenre: filteredMovie });
});

router.post('/create', (req, res) => {
  const title = req.body.movieTitle;
  const description = req.body.movieDescription;
  const genre = req.body.movieGenre;
  const posterURL = req.body.posterURL;
  const movie = {
    title: title,
    description: description,
    genre: genre,
    posterURL: posterURL,
    movieId: movies.length + 1,
  };
  movies.push(movie);
  res.redirect('/movies');
});

router.post('/delete', (req, res) => {
  const movieId = req.body.movieId;
  movies = movies.filter((movie) => movie.movieId != movieId);
  res.redirect('/movies');
});

module.exports = router;
