const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const moviesRouter = require('./routes/movies');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.urlencoded());
app.use('/movies', moviesRouter);

app.use(express.static('static'));

global.movies = [
  {
    movieId: 1,
    title: 'Batman',
    description: 'The Dark Knight kills Joker',
    genre: 'Action',
    posterURL:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
  },
  {
    movieId: 2,
    title: 'Spiderman',
    description: 'Spidey screws up',
    genre: 'Action',
    posterURL:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg',
  },
  {
    movieId: 3,
    title: 'Enchanto',
    description:
      'The Madrigals are an extraordinary family who live hidden in the mountains of Colombia in a charmed place called the Encanto. The magic of the Encanto has blessed every child in the family with a unique gift -- every child except Mirabel. However, she soon may be the Madrigals last hope when she discovers that the magic surrounding the Encanto is now in danger.',
    genre: 'Musical',
    posterURL:
      'https://upload.wikimedia.org/wikipedia/en/8/83/Encanto_poster.jpg',
  },
];

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.listen(3000, () => {
  console.log('Server is running...');
});
