let http = require('http');
let fs = require('fs');

function write(res, body){
    res.write(JSON.stringify(body));
    res.end();
}

let server = http.createServer(function(req, res){
    console.log('request:', req.method, req.url);
    let path = req.url.split('/');
    let result;
    let objectData;

    if(path[1] === 'sum'){
        result = {
            data: parseInt(path[2]) + parseInt(path[3])
        };
    }
    if(path[1] === 'multiply'){
        result = {
            data: parseInt(path[2]) * parseInt(path[3])
        };
    }
    if(path[1] === 'printrecord'){
        result = {
            "name": path[2],
            "family": path[3],
            "email": path[4]
        }
    }

    if (path[1] == "saverecord"){
        x = {
            "name": path[2],
            "family": path[3],
            "email": path[4]
        }
        objectData = JSON.stringify(x);
        fs.writeFile("amir.txt", objectData , (error , data) => {
            if (error) {
                write(res, "Error");

            }
            else {
                write(res, "Succed!");
            }
        });
    }

    write(res, result);
});

server.listen(80);