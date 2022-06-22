var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'hidden',
  user     : 'hidden,
  password : 'hidden',
  database : 'db'
});

connection.connect(function(err) {
    if (err){
      console.log(err);
      //throw err;
    } else {
      console.log('DB connected :)');
    }
});

module.exports = connection;