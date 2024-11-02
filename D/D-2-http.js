let http = require('http');
let cmd = require('./D-2-cmd')
let server = http.createServer(function(req, res){
    let urlString = req.url ;
    let splitedString = urlString.split("/");

    let sum = 0;
    newArray = [];

    for (let index = 0; index < splitedString.length; index++) {
        let x = parseInt(splitedString[index]);
        newArray.push(x);
    }
    console.log(newArray);
    res.write(sum);
    res.end();
});
server.listen(80);