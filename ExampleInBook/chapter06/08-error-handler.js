const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Meadowlark Travel');
})

app.use((err, next, req, res) => {
    console.error('** SERVER ERROR: ' + err.message);
    res.status(500).render('08-error', 
    { message: "you shouldn't have clicked that!" })
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` + `press Ctrl + C to terminate.`
));