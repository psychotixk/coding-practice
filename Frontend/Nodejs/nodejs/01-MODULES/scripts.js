//  File system module (fs)
const fs = require('node:fs');


// *! Task: Read the contents of notes.txt
console.log('Start of script');

// *? [Sync]   => Blocking operations
// const contents = fs.readFileSync('notes.txt', 'utf-8');
// console.log('contents', contents);

// *? [Async]  => Non Blocking operation
fs.readFile('notes.txt', 'utf-8', function(error, data){
    if (error) console.log(error);
    else console.log('content got', data);
});





console.log('End of the script');