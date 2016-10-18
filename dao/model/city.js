//Including dependency
var Sequelize = require("sequelize");

function getModel(sequelize){
	
	var city = sequelize.define('city', {
		city_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true
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
				type: Sequelize.STRING,
				allowNull: false
		}
		}, {
		   tableName: 'city',
		   freezeTableName: true,
		   timestamps: false
    });
	
	city.build();
	
	return city;
}

//permet d'export la fonction  getSity pour l'utiliser en tant que module
exports.getModel = getModel;