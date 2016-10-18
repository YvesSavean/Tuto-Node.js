//Permet la récupération du module requestHandlers permettant la gestion des String
var querystring = require("querystring");
//Permet la récupération du module requestHandlers permettant la lecture de fichier
var fs = require('fs');

var cb = require('./dao/connectBase');

var sc = require('./dao/SequelizeConnect');

//function qui permet d'afficher la page d'accueil
function accueil(response,postData) {
	fs.readFile('./file/file1.html', 'utf8', function (err,data) {
	  response.writeHead(200, {"Content-Type": "text/html","charset":"UTF-8"});
	  if (err) {
		response.write("impossible de récupérer le fichier");
	  }else{
		response.write(data);
	  }
	  response.end();
	});
}

//function qui permet de retourner les donners post qu'on a envoyer
function post(response,postData) {
  response.writeHead(200, {"Content-Type": "application/json"});
  response.write(JSON.stringify("Vous avez envoyé : " + postData));
  response.write(JSON.stringify("Vous avez envoyé : " + querystring.parse(postData)));
  response.end();
}

//function qui permet de retourner toutes les données d'une table
function getCity(req,response) {
  cb.getCity(req,response);
}

//function qui permet de retourner  les données d'une table en fonction de l'id
function getOneCity(req,response,id) {
  cb.getOneCity(req,response,id);
}

//function qui permet de retourner toutes les données d'une table
function getSity(req,response) {
  sc.getSity(req,response);
}

//function qui permet de retourner  les données d'une table en fonction de l'id
function getOneSity(req,response,id) {
  if(id.slice(-1) == "-"){
	var idMod = id.substring(0,id.length-1);
	sc.getOneSity(req,response,idMod);
  }
  else if(id.split("-").length >= 2){
	var tableauId = id.split("-",2);
	sc.getSityBetween(req,response,tableauId[0],tableauId[1]);
  }else{
	sc.getOneSity(req,response,id);
  }
}

//permet d'export la fonction  accueil pour l'utiliser en tant que module
exports.accueil = accueil;
//permet d'export la fonction  post pour l'utiliser en tant que module
exports.post = post;
//permet d'export la fonction  getCity pour l'utiliser en tant que module
exports.getCity = getCity;
//permet d'export la fonction  getOneCity pour l'utiliser en tant que module
exports.getOneCity=getOneCity
//permet d'export la fonction  getSity pour l'utiliser en tant que module
exports.getSity = getSity;
//permet d'export la fonction  getOneSity pour l'utiliser en tant que module
exports.getOneSity=getOneSity