const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();

const messages = require('./lib/messages');

app.engine(
    'handlebars',
    expressHandlebars.engine({
        defaultLayout: 'main',
    })
);
app.set('view engine', 'handlebars');
app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => {
    res.render('about', { messages: messages.getMessages() });
});
app.listen(3000)