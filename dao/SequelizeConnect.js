var city = require("./model/city");
 
function getSity(req,res){
	city.getModel().findAll({raw: true}).then(function (err,data) {
		if (err) {	
			res.json({"code" : 100, "status" : "Error in connection database "});
			throw err;
		}   
		res.json(data);
		console.log("utilisation du connecteur sequelize");
	});
}

function  getOneSity(req,res,id){
	console.log("utilisation du connecteur sequelize");
    city.getModel().find({where:{city_id:id}}).then(function (err, data) {
		if (err) {	
			res.json({"code" : 100, "status" : "Error in connection database "+err});
			throw err;
		}   
		res.json(data);
		console.log("utilisation du connecteur sequelize");
	});
}

//permet d'export la fonction  getSity pour l'utiliser en tant que module
exports.getSity = getSity;

//permet d'export la fonction  getOneSity pour l'utiliser en tant que module
exports.getOneSity = getOneSity;