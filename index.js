//Permet la récupération du module server permettant la mise en place du serveur
var server = require("./serveur/server");

//Permet la récupération du module server permettant la mise en place du serveur
var routerExpress = require("./serveur/routerExpress");

server.start();
routerExpress.start();