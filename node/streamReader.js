let fs = require('fs');
let file = 'Deutsch_0plain.txt';
var reg = /\n/g;


fs.stat(file, (err, stat) => {
  let total = stat.size;
  let progress = 0;
  let read = fs.createReadStream(file)
  read.on('data', (chunk) => {
    progress += chunk.length;
    console.log("J'ai lu " + Math.round(100 * progress / total) + "%")
//    console.log(reg.test(chunk.toString()));
    console.log(chunk.toString().replace(reg, '+'));
      
  });
});