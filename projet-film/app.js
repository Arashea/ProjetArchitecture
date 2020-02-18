//importation des librairies
var express = require('express');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks');
require('dotenv/config');

//mongoose.connect('mongodb://localhost/film');
mongoose.connect(process.env.DB_CONNECTION,() =>{
  console.log('connection à la database');
});

//récuperer les différents modèles créés
 require('./models/Films');
 require('./models/Types');

// instancie une application express
var app = express(); 

//middleware
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

//utiliser le router en fonction des adresses demandées dans le navigateur
app.use('/',require('./routes/films'));
app.use('/types', require('./routes/types'));

//Configurer nunjucks
nunjucks.configure('views',{
  // echapper tout les caractères html présent dans les variables
  autoescape: true,
  express: app
});

//écoute de l'application sur le port 3000 de votre machine
console.log('Test lancé sur le port 3000');
app.listen(3000);