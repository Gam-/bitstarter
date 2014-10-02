var express = require('express');
var fs =  require('fs');
var app = express.createServer(express.logger());

var index = fs.readFileSync("index.html");
var buffer = new Buffer(index);

app.get('/', function(request, response)
{
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function()
{
  console.log("Listening on " + port);
});
