//Permet l'utilisation du framework express
var express = require('express');
//Permet la transformation en Json
var bodyParser =  require("body-parser");

//Permet la récupération du module requestHandlers permettant la gestion des url
var requestHandlers = require("./../requestHandlers");

var app = express();

//permet de gerer les json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//permet de gerer les liens pour angulars
app.use('/jsclient/', express.static(__dirname + '/vue/jsclient'));

// port a utiliser dans le listener
var port = process.env.PORT || 8080;

//Retourne la Page d'accueil
app.get('/', function(req, res) {
    res.sendfile("./file/file1.html");
});

//Retourne la Page de test en Angular
app.get('/test', function(req, res) {
    res.sendfile('./serveur/vue/index.html');
});

//Test d'un appel en Post
app.post('/post', function(req, res) {
	var id=req.body.id;
	requestHandlers.post(res,id);
});

//Retourne Toute les villes via mon propre orm
app.get('/city/getAll', function(req, res) {
	requestHandlers.getCity(req,res);
});

//Retourne une ville via mon propre orm
app.get('/city/getOne/:id', function(req, res) {
	requestHandlers.getOneCity(req,res,req.params.id);
});

//Retourne Toute les villes via l'orm sequelize
app.get('/sity/getAll', function(req, res) {
	requestHandlers.getSity(req,res);
});

//Retourne une  ville via l'orm sequelize
app.get('/sity/getOne/:id', function(req, res) {
	requestHandlers.getOneSity(req,res,req.params.id);
});

//function qui permet de lancer le listener
function start() {
 app.listen(8080);
}

//permet d'export la fonction  start pour l'utiliser en tant que module
exports.start = start;