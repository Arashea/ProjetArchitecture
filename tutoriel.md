# Objectifs du tutoriel 
Nous allons basé notre tutoriel sur un environnement sous Windows 10. Vous devrez utiliser le shell de Windows.  <br/> 
A la fin de ce tutoriel, vous serez en mesure de réaliser une API Rest en utilisant MongoDB.<br/>
Vous serez également en mesure d'avoir une interface web à l'aide d'Express.

# 1er Etape: télécharger les environnements.
Lors de cette étape, nous allons télécharger les logiciels suivants : 
* <a href="https://nodejs.org/fr/download/" title="Tuto">Nodejs.org </a>  : télécharger la version qui correspond à votre système d'exploitation
* <a href="https://code.visualstudio.com/download" title="Tuto">Visual studio code </a> 
* MongoDB * 

## Comment configurer MongoDB 
Aller sur <a href="https://www.mongodb.com" title="Tuto">MongoDB </a> ![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/MongoDB.PNG)


Aller sur <a href="https://nodejs.org/fr/download/" title="Tuto">Nodejs.org </a> et télécharger la version qui correspond à votre système d'exploitation. 
Nous choisirons ici celle de Windows 64bits. 

Une fois cette installation réussie, aller sur <a href="https://expressjs.com/fr/starter/installing.html" title="Tuto">Expressjs.com </a>  <br/>

Une fois toute les installations requises effectuées, vous pouvez créer un dossier dans le répertoire de votre choix. 
Ouvrer ensuite Windows Power Shell et placer vous dans votre dossier à l'aide de la commande suivante : 
```
changer de repertoire 
``` 

Puis taper la commande suivante :
```
npm init 
``` 
ensuite écriver dans le shell : 
```
npm install --save express mongoose nunjuncks bootstrap
``` 
Ouvrez Visual Studio Code, Fichier -> ouvrir un dossier -> test <br/>
Puis créer un fichier  s'intitullant :file_folder: app.js.<br/> 
Dans ce fichier, vous pouvez écrire : 
``` javascript
var express = require('express');
var mangoose = require('mangoose');

var app = express(); // instancie une application express

app.get('/', req,res => {  
  res.send('Votre application fonctionne') // réponse envoyé au client
 });

console.log('Test lancer sur le port 3000');
app.listen(3000);
``` 
L'entrée app.get permet de définir une nouvelle route qui execute la fonction res.send à chaque fois qu'un utilisateur va à la racine de notre application symboliser par "/" <br/>
Dans le terminal de VSC: 
```
node app.js
``` 
Vous pouvez désormais aller sur votre explorateur à l'adresse : localhost:3000 
La page devrait afficher *Votre application fonctionne* (IMAGE) 	:grinning:

Une fois cette vérification faite, vous pouvez enlever les lignes de app.get. <br/>

Ensuite, nous allons nous connecter à la base de donnée mongoDB, cela nous permet de se connecter à la base de donnée qui se situe sur le serveur localhost. (attention, prenez garde à ce que mongoDB soit ouvert lors de cette manipulation) : 
``` 
mongoose.connect('mongodb://localhost/basededonnee')
``` 
Dans VSC, créer un nouveau dossier intitulé views. Puis dans ce nouveau dossier, nous allons créer deux nouveaux dossier et un fichier : 
* :file_folder: pokemons
* :file_folder: types
* :page_facing_up: layout.html

Afin d'utiliser nunjuncks comme moteur de template, il faut ajouter cette ligne dans app.js :
``` 
var nunjuncks = require('nunjuncks');

nunjuncks.configure('views',{
  autoescape : true,
  express: app
});
``` 
