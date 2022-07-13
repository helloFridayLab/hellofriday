var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "example"
});

    con.connect(function(err) {
      if (err) throw err;
    alert("Connected!");
});

