var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
const cors = require('cors');
var app = express();

var PORT = process.env.PORT || 3000;
    require('dotenv').config();

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        app.use(express.static('public'));

        app.get('*', function (req, res) {
            res.sendFile(__dirname + '/public/index.html');
        });

        app.listen(PORT, '0.0.0.0', function () {
            console.log('server is up on port ' + PORT);
        });

