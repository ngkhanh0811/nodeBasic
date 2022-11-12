const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Meadowlark Travel');
})

app.get('/greeting', (req, res) => {
    res.render('greeting', {
    message: 'Hello esteemed programmer!',
    style: req.query.style,
    userid: req.cookies.userid,
    username: req.session.username
    })
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` + `press Ctrl + C to terminate.`
));