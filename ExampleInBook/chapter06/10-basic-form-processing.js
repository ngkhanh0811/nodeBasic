const express = require('express');
const app = require('app');
const port = process.env.port || 3000;

app.post('/process-contact', (req, res) =>{
    console.log(`receive contact from ${req.body.name} <${req.body.email}>`);
    res.redirect(303, '10-thank-you');
})

app.listen(port, () => {
    console.log(`Server listen on http://localhost:${port}` + `press Ctrl + C to terminate`);
})