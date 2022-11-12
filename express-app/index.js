const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const session = require ('express-session');
const cookieParser = require('cookie-parser');
const catNames = require('cat-names');

const messages = require('./lib/messages');


app.use(cookieParser());

app.use(session({ resave: false, saveUninitialized:false, secret: 'keyboard cat'}))
app.engine(
    'handlebars',
    expressHandlebars.engine({
        defaultLayout: 'main',
    })
);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('home'));
app.get('/greeting', (req, res) => {
    res.render('about', {
    message: 'Hello esteemed programmer!',
    style: req.query.style,
    userid: req.cookies.userid,
    username: req.session.username
    })
   })

app.get('/random-userid', (req, res) => {
    res.cookie('userid', Math.floor(Math.random()*10000));
    res.redirect('/greeting');
})

app.get('/random-username', (req, res) => {
    req.session.username = catNames.random();
    res.redirect('/greeting');
})


app.listen(3000)