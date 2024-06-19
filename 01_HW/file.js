
const fileSystem = require('fs')
const os = require('os')

// Write file method will create the file with the given content.
// sync
// fileSystem.writeFileSync('./test.txt', "Hey There");

// async
// fileSystem.writeFile('./test.txt', "Hey There Async", (error) => {} );

// sync
// const result = fileSystem.readFileSync("./contacts.txt", 'utf-8')
// console.log(result);

// async
// fileSystem.readFile("./contacts.txt", 'utf-8', (err, result) =>{
//     if(err){
//         console.log("error", err);
//     }else{
//         console.log(result);
//     }
// })

// the writefile function will over write the current content of the file, now we want to add the content in the new line, for that we will use append method
fileSystem.appendFileSync('./test.txt', `new Date().getDate().toLocaleString()\n`);
fileSystem.appendFileSync('./test.txt',`Hey There\n`);

//to copy a file below mrthod is used
// fileSystem.cpSync('./test.txt', './copytest.txt' )

// to delete the file below method is used
// fileSystem.unlink('./copytest.txt');

// we can also check stats of the file
// fileSystem.statSync('./test.txt');

// We can make directory with the below method
// fileSystem.mkdirSync("my docs")

console.log(os.cpus().length);