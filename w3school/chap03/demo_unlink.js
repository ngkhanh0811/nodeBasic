var fs = require('fs');

fs.unlink('filedemo2.txt', function(err){
    if(err) throw err;
    console.log('Saved!');
})