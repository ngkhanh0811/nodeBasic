var url = require('url');
var adr = 'http://localhost:8080/default.html?month=february&year=2020';
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.search);
console.log(q.pathname);
console.log(q.query.year);

var qdata = q.query;
console.log(qdata.month);