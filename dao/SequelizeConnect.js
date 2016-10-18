var city = require("./model/city");
var ValidationError  = require("sequelize").ValidationError;

//Including dependency
var Sequelize = require("sequelize");

//Setting up the config
var sequelize = new Sequelize('sakila', 'root', 'root', {
	host: "localhost",
	port: 3306,
	dialect: 'mysql',
	logging: false,

		
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

sequelize.authenticate().then(function(err) {
		console.log('Connection has been established successfully.');
	}, function (err) { 
		console.log('Unable to connect to the database: ', err);
});
	
sequelize.sync().then(function(err) {
	console.log('It worked!');
	}, function (err) { 
	console.log('An error occurred while creating the table:', err);
});
	
 
function getSity(req,res){
	city.getModel(sequelize).findAll().then(function (data,error) {
		if (error != undefined){
			if (error instanceof ValidationError) {
				res.json({"code" : 100, "status" : "ValidationError in connection database "+error});
				throw error;
			}
			else {
				res.json({"code" : 100, "status" : error.constructor+" in connection database "+error});
				throw error;
			}
		}
		res.json(data);
		console.log("utilisation du connecteur sequelize");
	});
}

function  getOneSity(req,res,id){
    city.getModel(sequelize).find({where:{city_id:id}}).then(function (data, error) {
		if (error != undefined){
			if (error instanceof ValidationError) {
				res.json({"code" : 100, "status" : "ValidationError in connection database "+error});
				throw error;
			}
			else {
				res.json({"code" : 100, "status" : error.constructor+" in connection database "+error});
				throw error;
			}
		}
		var jsonArray = [data]; 
		res.json(jsonArray);
		console.log("utilisation du connecteur sequelize");
	});
}

//permet d'export la fonction  getSity pour l'utiliser en tant que module
exports.getSity = getSity;

//permet d'export la fonction  getOneSity pour l'utiliser en tant que module
exports.getOneSity = getOneSity;