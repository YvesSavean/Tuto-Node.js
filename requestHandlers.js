//Permet la récupération du module requestHandlers permettant la gestion des String
var querystring = require("querystring");
//Permet la récupération du module requestHandlers permettant la lecture de fichier
var fs = require('fs');

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
  response.writeHead(200, {"Content-Type": "text/plain","charset":"UTF-8"});
  response.write("Vous avez envoyé : " + postData);
  response.write("Vous avez envoyé : " + querystring.parse(postData));
  response.end();
}

//permet d'export la fonction  accueil pour l'utiliser en tant que module
exports.accueil = accueil;
//permet d'export la fonction  post pour l'utiliser en tant que module
exports.post = post;