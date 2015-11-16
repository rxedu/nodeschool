var fs = require('fs')
var path = require('path')

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function (err, data) {
    if (err) {
      return callback(err)
    }

    var arr = data.filter(function (f) {
      return path.extname(f) == '.' + ext
    })

    callback(null, arr)
  })
}
