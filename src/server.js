var express = require('express');
var errorHandler = require('errorhandler');

var fs = require('fs');

var app = express();

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
//app.configure('development', function() {
    app.use(errorHandler({dumpExceptions: true, showStack: true}));
}
//)
;
if ('production' == env) {
//app.configure('production', function() {
    app.use(errorHandler());
}
//)
;


app.get('/', function (req, res) {
    res.contentType('text/javascript');
    f = fs.readFile('kittens.json', 'utf8', function (err, data) {
        if (err) { // TODO handle that
        }
        res.send(data);
    });

//    res.send('Hello World');
});

app.get('/kittens.csv', function (req, res) {
    res.contentType('text/csv');
    f = fs.readFile('kittens.csv', 'utf8', function (err, data) {
        if (err) {
            // TODO handle that
        }
        res.send(data);
    });
});


var port = process.env.PORT || 32000;
app.listen(port, function () {
    console.log("Listening on " + port);
});
