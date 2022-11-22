var fs = require('fs');

fs.rename('filedemo1.txt', 'newfiledemo1.txt',  function(err){
    if(err) throw err;
    console.log("Renamed!");
})