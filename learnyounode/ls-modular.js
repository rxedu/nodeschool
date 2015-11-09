var ls = require('./module-ls');

ls(process.argv[2], process.argv[3], function (err, data) {
  for (var i=0; i < data.length; ++i) {
    console.log(data[i]);
  }
});
