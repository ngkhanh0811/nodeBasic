const { rm } = require('fs');
var http = require('http');
var httpServer = http.createServer(function(req, res){
    res.end("This is my first node app!");
});

httpServer.listen(8080, function(){
    console.log('Server listening on port 8080')
});

// $("#someEl").click(function(){})

var wakeUp = function (callback){
    console.log("I'm waking up!");
    if(callback)
        if(typeof callback === 'function')
            callback();
};

var checkPhone = function(callback){
    console.log("Checking phone...");
    if(callback)
        if(typeof callback === 'function')
            callback();
};

var eatBreakfast = function(callback){
    console.log("I'm eating breakfast");
    if(callback)
        if(typeof callback === 'function')
            callback();
};

// wakeUp();
// checkPhone();
// eatBreakfast();

wakeUp(function(){
    checkPhone(function(){
        eatBreakfast();
    })
});


var readline = require("readline");
    rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt("--> ");
rl.prompt();

var toDoList = [];


var commands = {
    ls:function(){
        console.log(toDoList);
    },
    add:function(item){
        toDoList.push(item);
    },
    rm:function(item){
        console.log("I want to remove",item,"!!");
    }
};

rl.on('line', function(line){
    var words = line.split(' ');
    command = words.shift(),
    // item = words.join(' ');
    args5tr = words.join(' ');

    commands[command](args5tr);

    // if(command === 'ls'){
    //     console.log(toDoList);
    // }

    // if(command === 'add'){
    //     var item = words.join(' ');
    //     toDoList.push(line);
    // }

    // console.log("the command is", command)
    // console.log(words);
    // toDoList.push(line);
    // console.log(toDoList);
    rl.prompt();
});


