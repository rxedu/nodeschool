var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, data) {
  var files = data.filter(function (f) {
    return path.extname(f) == '.' + process.argv[3];
  })

  for (var i=0; i < files.length; ++i) {
    console.log(files[i]);
  }
});
