const express = require('express');
const path = require('path');
const mysql = require('mysql');
const config = require('./config');
const bodyParser = require('body-parser');

const options = {
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    database: "RESTARAUNT_DATABASE"
};

const app = express();

app.set('view engine', 'jade');
app.set('views', path.join(__dirname + "/views"));

app.use(bodyParser.json());

const connection = mysql.createConnection(options);

app.get("/", (req, res) => {
    const query_one = "SELECT * FROM provinces";
    const query_two = "SELECT * FROM food_combos";
    let items = "";
    let combos = "";

    connection.query(query_one, async (err, result) => {
        if (err) throw  err;
        items = result;
    });

    connection.query(query_two, async (err, result) => {
        if (err) throw err;
        combos = result
    });

    setTimeout(() => {
        res.render("index", {items: items, combos: combos})
    }, 500);

});


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});