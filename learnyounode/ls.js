var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, data) {
  data.filter(function (f) {
    return path.extname(f) == '.' + process.argv[3];
  }).forEach(function (f) { console.log(f); });
});
