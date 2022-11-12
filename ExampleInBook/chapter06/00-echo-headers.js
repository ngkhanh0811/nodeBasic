const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Meadowlark Travel');
})

app.get('/headers', (req, res) => {
    res.type('text/plain')
    const headers = Object.entries(req.headers).map(([key, value]) => `${key}: ${value}`)
    res.send(headers.join('\n'))
})   

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` + `press Ctrl + C to terminate.`
));
   