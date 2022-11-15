const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const session = require ('express-session');
const cookieParser = require('cookie-parser');
const { url } = require('inspector');

app.use(cookieParser());

app.use(session({ resave: false, saveUninitialized:false, secret: 'keyboard cat'}))
app.use(express.static(__dirname + '/public'));

app.engine(
    'handlebars',
    expressHandlebars.engine({
        defaultLayout: 'main',
    })
);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('home'));
app.get('/newyear', (req, res) => {
    res.render('newyear', {
        title: "Happy New Year !!!",
        subtitle: "",
        image: "./img/newyear.jpg"
    });
});

app.get('/christmas', (req, res) => {
    res.render('christmas', {
        title: "Merry Christmas !!!",
        subtitle: "",
        image: "./img/christmast.jpg"
    });
})

app.get('/summer', (req, res) => {
    res.render('summer', {
        title: "Summer Holiday !!!",
        subtitle: "",
        image: "./img/summer.jpg"
    });
})

app.get('/mid-autumn', (req, res) => {
    res.render('mid-autumn', {
        title: "The best weather in the year !!!",
        subtitle: "",
        image: "./img/midautumn.webp"
    });
})

app.listen(3000)
console.log(`Server is listen at http://localhost:3000, Ctrl + C to terminate`);