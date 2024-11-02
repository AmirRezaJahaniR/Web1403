let http = require('http');
let server = http.createServer((req, res) => {

    let path = req.url.split('/');
    let stringText = "";

    if(path[1] == "printrecord") {

    let valriable1 = {
        name : path[2] ,
        family :  path[3],
        email : path[4]
    };
    stringText = JSON.stringify(valriable1);
    }

    res.write(stringText);
    res.end();
});
server.listen(80);
