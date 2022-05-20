const express = require("express");
let cors = require('cors')
let app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

let bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(expressLayouts);
app.set('layout', 'layout/layout.ejs');

app.use(cors())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

const db = require("./helpers/db")();

// Routes
const indexRoute = require('./routes/index');
app.use('/', indexRoute);

const userRoutes = require('./routes/user');
app.use('/user', userRoutes);

const formRoutes = require('./routes/form');
app.use('/form', formRoutes);

const errorController = require('./controllers/errors');
app.use(errorController.get404Page);


// App start with port 80
app.listen(process.env.PORT || 80, () => {
    console.log("App Started On Port : 80");
});

module.exports = app;