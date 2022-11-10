const express = require('express');
const app = require('app');
// typically at the top of the file
const handlers = require('./lib/handlers')
app.get('/', handlers.home)
app.get('/about', handlers.about)
// custom 404 page
app.use(handlers.notFound)
// custom 500 page
app.use(handlers.serverError)

if(require.main === module) {
    app.listen(port, () => {
    console.log( `Express started on
   http://localhost:${port}` +
    '; press Ctrl-C to terminate.' )
    })
   } else {
    module.exports = app
   }