var mysql = require('mysql');
const util = require('util');

var con = mysql.createConnection({
    database:"juniordeveloper",
  host: "localhost",
  user: "root",
  password: ""
});


const query = util.promisify(con.query).bind(con);

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = query