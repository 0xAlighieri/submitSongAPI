
const config = require('./config/config');



const express = require('express');
const app = express();
const port = config.port;
const mongoose = require('mongoose');
const Song = require('./api/models/songModel');
const bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.database); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/songRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);