const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const cookiePaeser = require('cookie-parser');
const flash = require('connect-flash');
const router = require('./routes/app');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/views", {
    index: false, 
    immutable: true, 
    cacheControl: true,
    maxAge: "30d"
}));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookiePaeser());
app.use(session({
    secret: 'test',
    resave: false,
    saveUnitialized: true,
    cookie: {}
}));
app.use(flash()); 

app.use('/', router); 
module.exports = app; 