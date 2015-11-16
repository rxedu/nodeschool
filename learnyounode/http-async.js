var bl = require('bl')
var http = require('http')

var results = []
var count = 0

function printResults () {
  if (count === 3) {
    for (var i = 0; i < results.length; ++i) {
      console.log(results[i])
    }
  }
}

function getURL (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      results[index] = data.toString()
      count++
      printResults()
    }))
  })
}

for (var i = 0; i < 3; ++i) {
  getURL(i)
}
