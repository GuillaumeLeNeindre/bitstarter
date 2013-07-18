var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var bufferFile = fs.readFileSynch("index.html");
  response.send(bufferFile.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
