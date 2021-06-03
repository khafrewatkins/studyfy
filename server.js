// Load Node modules
var express = require('express');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Port website will run on
app.listen(process.env.PORT || 2121);

const ejs = require('ejs');

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/index');
});

// .......