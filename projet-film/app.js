//importation des librairies
var express = require('express');
var mongoose = require('mongoose');

// instancie une application express
var app = express(); 

app.get('/', (req,res) => {  
  res.send('Votre application fonctionne') // réponse envoyé au client
 });

//écoute de l'application sur le port 3000 de votre machine
console.log('Test lancé sur le port 3000');
app.listen(3000);