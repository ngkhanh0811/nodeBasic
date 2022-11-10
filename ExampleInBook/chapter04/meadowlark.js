const fortune = require('./lib/fortune')

app.get('/about', (req, res) => {
    res.render('about', { fortune: fortune.getFortune() } )
   })