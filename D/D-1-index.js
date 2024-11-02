let cmd = require('./D-1-cmd');
let fs = require('fs');

cmd.use("save", function(contInputs){
    fs.readFile("database.json", function(error, data){
        if(error){
            if(error.code === 'ENOENT'){
                console.log('File not found.')
            }
            else {
                console.log("Other Error " , error)
            }
        }
        else{
            let x = {
                name: contInputs[1],
                family: contInputs[2],
                age: contInputs[3],
                email: contInputs[4]
            }
            let obj = JSON.parse(data.toString());
            obj.data.push(x);
            let txt = JSON.stringify(obj);

            fs.writeFile('database.json', txt , {encoding:'utf8'}, function(error){
                if(error){
                    console.log('ERROR:', error);
                }
                else{
                    console.log('File Saved.')
                }
            });
        }
    });
});

cmd.start();