const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const https = require('https');

app.set('view engine', 'hbs');
app.use(express.static('static'))

require('dotenv').config()

app.get('/', function(req, res) {
    res.render('index')
})

const listener = app.listen(process.env.PORT || 80, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
});