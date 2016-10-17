//Permet la récupération du module requestHandlers permettant la gestion des url
var requestHandlers = require("./../requestHandlers");

//mise en place de la gestion des paths et les fonctions correspondant 
var handle = {};
handle["/"] = requestHandlers.accueil;
handle["/start"] = requestHandlers.start;
handle["/post"] = requestHandlers.post;

//function qui permet de router les appels
function route(pathname, response, postData) {
  console.log("Début du traitement de l'URL " + pathname + ".");
  //si un handle existe alors on excute la fonction
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response,postData);
  //sinon on retourne page non trouvé
  } else {
    console.log("Aucun gestionnaire associé à " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain","charset":"UTF-8"});
    response.write("404 Non trouvé");
    response.end();
  }
}

//permet d'export la fonction  route pour l'utiliser en tant que module
exports.route = route;