/**
 * Created by davirand on 8/26/2016.
 */
var http = require('http');

var server = http.createServer(function (req, res) {
    console.log('got a request!');
    res.write('hi');
    res.end();
});

server.listen(3000);