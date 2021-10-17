const express = require('express'),
    morgan = require('morgan');

const app = express();

app.use(morgan('common'));
app.use(express.static('public'));

let topMovies = [
    {
      title: 'Harry Potter and the Sorcerer\'s Stone',
      author: 'J.K. Rowling'
    },
    {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkien'
    },
    {
      title: 'Twilight',
      author: 'Stephanie Meyer'
    }
  ];

app.get('/movies', (req, res) => {
    res.json(topMovies);
})

app.get('/', (req, res) => {
    res.send('Welcome you to your movies website');
})



app.listen(8080, () => {
    console.log('Your app is listening on port 8080');
})