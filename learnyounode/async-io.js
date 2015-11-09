var fs = require('fs');

function lines(err, data) {
  return console.log(data.split('\n').length - 1);
}

fs.readFile(process.argv[2], 'utf8', lines)
