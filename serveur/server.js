//Permet la récupération du module Http permettant la création du serveur
var http = require("http");
//Permet la récupération du module url permettant la gestion de l'url
var url = require("url");
//Permet la récupération du module router permettant la gestion du routage
var router = require("./router");


// fonction start qui sera utiliser en tant que fonction de module pour ecrire créer le serveur
function start(route) {
  function onRequest(request, response) {
	var postData = "";
	//permet de récupérer le path
    var pathname = url.parse(request.url).pathname;
	//On indique ce qu'on reçois
	request.setEncoding("UTF-8");
	//permet de récupérer les paquets
    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
    });
	//permet d'executer un function après avec récupérer tout les paquets
    request.addListener("end", function() {
	  //on appel la fonction pour gérer le routage
      router.route(pathname, response, postData);
    });
  }
  //créer le serveur, puis on met en paramètre la fonction qui permet d'ecrire la réponse et puis on dit qu'on ecoute sur le port 8888
  http.createServer(onRequest).listen(8001);
  
  console.log("Démarrage du serveur.");
}

//permet d'export la fonction  start pour l'utiliser en tant que module
exports.start = start;
