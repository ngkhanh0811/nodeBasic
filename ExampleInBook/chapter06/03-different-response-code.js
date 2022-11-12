const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Meadowlark Travel');
})

app.get('/error', (req, res) => {
    res.status(500)
    res.render('error')
})

app.get('/error', (req, res) => res.status(500).render('error'))

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` + `press Ctrl + C to terminate.`
));