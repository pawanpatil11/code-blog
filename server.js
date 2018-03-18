var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
console.log('server started listening on port 80!!!');
app.listen(80);