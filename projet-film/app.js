//importation des librairies
var express = require('express');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks');

// instancie une application express
var app = express(); 

//middleware
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

//Configurer nunjucks
nunjucks.configure('views',{
  // echapper tout les caractères html présent dans les variables
  autoescape: true,
  express: app
});

//écoute de l'application sur le port 3000 de votre machine
console.log('Test lancé sur le port 3000');
app.listen(3000);