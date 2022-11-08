const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Meadowlark Travel');
})

app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('About Meadowlark Travel');
})

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - not found');
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => res.render('about'))

app.use((req, res) => {
    res.status(404)
    res.render('404')
})

app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})