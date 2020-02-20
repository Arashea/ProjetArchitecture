//importation des librairies
var express = require('express');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks');
require('dotenv/config');
var multer =require('multer');

//configuration pour l'upload
var upload = multer({
  dest: __dirname + '/uploads'
});

//mongoose.connect('mongodb://localhost/film');
mongoose.connect(process.env.DB_CONNECTION,() =>{
  console.log('connection à la database');
});
var db= mongoose.connection;
db.on('error',console.error.bind(console,'connection error :'));
db.once('open', function(){
  console.log('connecte à la bd');
});

//récuperer les différents modèles créés
 require('./models/Films');
 require('./models/Types');

// instancie une application express
var app = express(); 

//middleware
app.use('/css', express.static(__dirname +'/node_modules/bootstrap/dist/css'));

//utilisation de upload dans le formulaire quand un champs s'appelle file tu sauvergarde dans le répertoire uplod
app.use(upload.single('file'));
//utiliser le router en fonction des adresses demandées dans le navigateur
app.use('/',require('./routes/films'));
app.use('/types', require('./routes/types'));

app.use('/uploads', express.static(__dirname +'/uploads'));
//Configurer nunjucks
nunjucks.configure('views',{
  // echapper tout les caractères html présent dans les variables
  autoescape: true,
  express: app
});

//écoute de l'application sur le port 3000 de votre machine
console.log('Test lancé sur le port 3000');
app.listen(3000);