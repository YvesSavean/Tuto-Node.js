var mysql      = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10, 
  host     : 'localhost',
  user     : 'root',
  port: 3306,
  password : 'root',
  database : 'sakila',
  debug    :  true
});


function getCity(req,res){
	pool.getConnection(function(err,connection){
			if (err) {	
				res.json({"code" : 100, "status" : "Error in connection database"});
				return;
			}   

			console.log('connected as id ' + connection.threadId);
			
			connection.query("SELECT * from city",function(err,rows){
				connection.release();
				if(!err) {
					res.json(rows);
				}           
			});

			connection.on('error', function(err) {      
				res.json({"code" : 100, "status" : "Error in connection database"});
				return;   
			});
	});
}

function  getOneCity(req,res,id){
	pool.getConnection(function(err,connection){
			if (err) {	
				res.json({"code" : 100, "status" : "Error in connection database"});
				return;
			}   

			console.log('connected as id ' + connection.threadId);
			
			connection.query("SELECT * from city where city_id ="+id,function(err,rows){
				connection.release();
				if(!err) {
					res.json(rows);
				}           
			});

			connection.on('error', function(err) {      
				res.json({"code" : 100, "status" : "Error in connection database"});
				return;   
			});
	});
}

//permet d'export la fonction  getCity pour l'utiliser en tant que module
exports.getCity = getCity;

//permet d'export la fonction  getOneCity pour l'utiliser en tant que module
exports.getOneCity = getOneCity;