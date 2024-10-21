const { error } = require('console');
let cmd = require('./C-4-cmd');
let fs = require('fs');

cmd.use("minus", function(contInputs){
    console.log(cmd.parseInput(contInputs[1]) - cmd.parseInput(contInputs[2]));
});
cmd.use("sum", function(contInputs){
    console.log(cmd.parseInput(contInputs[1]) + cmd.parseInput(contInputs[2]));
});
cmd.use("multiply", function(contInputs){
    console.log(cmd.parseInput(contInputs[1]) * cmd.parseInput(contInputs[2]));
});
cmd.use("div", function(contInputs){
    console.log(cmd.parseInput(contInputs[1]) / cmd.parseInput(contInputs[2]));
});
cmd.use("printRecord", function(contInputs){
    console.log({
        name: contInputs[1],
        family: contInputs[2],
        age: contInputs[3],
        email: contInputs[4]
    });
});
cmd.use("saveRecord", (contInputs) => {
    let x = {
        first : contInputs[1],
        second : contInputs[2],
        third : contInputs[3],
        forth : contInputs[4],
        
    }
    const savefile = JSON.stringify(x);

    fs.writeFile('myDatabase.txt', savefile , {encoding:'utf8'}, function(error){
        if(error){
            console.log('ERROR:', error);
        }
        else{
            console.log('File Saved.')
        }
    })
});
cmd.use("open", (contInputs) => {

    let x = "./"+contInputs[1];
    let y = x+'.txt';

    fs.readFile(y, 'utf8', (error, data) => {
        if (error) {
            if (error.code == "ENOENT") {
                fs.readdir(x , (error, data) => {
                    if (error) { console.log(error.message);}
                    else { console.log(data); }
                })
            }
            else console.log("other error!");
        }
        else {
        console.log(data);
        }
})});
cmd.start();