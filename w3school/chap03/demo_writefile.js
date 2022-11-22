var fs = require('fs');

fs.writeFile('filedemo2.txt', 'Something', function(err, file){
    if(err) throw err;
    console.log('Saved!');
})