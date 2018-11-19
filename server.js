var express = require('express');
var serveStatic = require('serve-static');
var app = express();

app.use(serveStatic(__dirname + "/dist"));


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});