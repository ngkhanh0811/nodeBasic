const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Meadowlark Travel');
})

app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('About Meadowlark Travel');
})

app.use((res, req) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - not found');
});

app.use((err, res, req, next) =>{
    console.error(err.message);
    res.type('text/plain');
    res.status(500);
    res.send('500- server error');
});

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` + `press Ctrl + C to terminate.`
));