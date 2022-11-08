const express = require('express');
const app = express();
const port = 8081;
const handlebars = require('express-handlebars');
const morgan = require('morgan');

// Use morgan
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', handlebars);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
});