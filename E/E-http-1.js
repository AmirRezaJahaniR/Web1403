let http = require('http');
let server = http.createServer((req, res) => {
    let path = req.url.split('/');
    let valriable1 = 0;
    if (path[1] == "divide") {
        valriable1 = parseInt(path[2]) / parseInt(path[3]);
        res.write(valriable1.toString());
        res.end(); 
    }
    else if (path[1] == "multiply") {
    valriable1 = parseInt(path[2]) * parseInt(path[3]);
    res.write(valriable1.toString());
    res.end(); 
    }
    else if (path[1] == "sum") {
    valriable1 = parseInt(path[2]) + parseInt(path[3]);
    res.write(valriable1.toString());
    res.end(); 
    }
    else {
    let commandError = "Wrong Command!"
    res.write(commandError.toString());
    res.end();   
    }
});
server.listen(80);