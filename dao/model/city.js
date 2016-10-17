function getModel(){
	
		//Including dependency
	var Sequelize = require("sequelize");

	//Setting up the config
	var sequelize = new Sequelize('sakila', 'root', 'root', {
		host: "localhost",
		port: 3306,
		dialect: 'mysql',
		
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		}
	});

	sequelize
	  .authenticate()
	  .then(function(err) {
		console.log('Connection has been established successfully.');
	  }, function (err) { 
		console.log('Unable to connect to the database:', err);
	  });
	
	var city = sequelize.define('city', {
		city_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false
			},
		city: {
				type: Sequelize.STRING,
				allowNull: false
			},
		country_id: {
				type: Sequelize.INTEGER,
				allowNull: false
		},
		last_update :{
				type: Sequelize.DATE,
				allowNull: false
		}
		}, {
		   tableName: 'city',
		   freezeTableName: true,
		   timestamps: false
    });
	
	return city;
}

//permet d'export la fonction  getSity pour l'utiliser en tant que module
exports.getModel = getModel;