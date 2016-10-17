//Including dependency
var Sequelize = require("sequelize");
 
//Setting up the config
var sequelize = new Sequelize('sakila', 'root', 'root', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql'
});

var User = sequelize.define('city', {
  city_id: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  country_id: {
    type: Sequelize.STRING
  },
  last_update: {
    type: Sequelize.STRING
  }
});

function getSity(req,res){
	User.find({}).complete(function (err,data) {
		if (err) {	
			res.json({"code" : 100, "status" : "Error in connection database"});
			return;
		}   
		res.json(data);
	});
}

function  getOneSity(req,res,id){
    User.find({where:{city_id:id}}).complete(function (err, data) {
		if (err) {	
			res.json({"code" : 100, "status" : "Error in connection database"});
			return;
		}   
		res.json(data);
	});
}

//permet d'export la fonction  getSity pour l'utiliser en tant que module
exports.getSity = getSity;

//permet d'export la fonction  getOneSity pour l'utiliser en tant que module
exports.getOneSity = getOneSity;