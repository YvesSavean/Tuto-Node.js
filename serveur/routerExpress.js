var express = require('express');

var bodyParser =  require("body-parser");

//Permet la récupération du module requestHandlers permettant la gestion des url
var requestHandlers = require("./../requestHandlers");

var app = express();
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


app.get('/', function(req, res) {
    res.sendfile("./file/file1.html");
});

app.post('/post', function(req, res) {
	var id=req.body.id;
	requestHandlers.post(res,id);
});

app.get('/city/getAll', function(req, res) {
	requestHandlers.getCity(req,res);
});

app.get('/city/getOne/:id', function(req, res) {
	requestHandlers.getOneCity(req,res,req.params.id);
});

function start() {
 app.listen(8080);
}

exports.start = start;