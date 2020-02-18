# Objectifs du tutoriel 
Dans ce tutoriel, nous vous présenterons comment créer un site web permettant de rpésenter une base de données de films. Nous allons basé notre tutoriel sur un environnement sous Windows 10. Vous devrez utiliser le terminal de Visual Studio Code.  <br/> 
A la fin de ce tutoriel, vous serez en mesure de recréer un site web en utilisant Node.js, le framework Express, ainsi que MongoDB. 


# Etape 1 : télécharger les environnements.
Lors de cette étape, nous allons télécharger les logiciels suivants : 
* <a href="https://nodejs.org/fr/download/" title="Tuto">Nodejs.org </a>  : télécharger la version qui correspond à votre système d'exploitation. Nous choisirons ici celle de Windows 64bits. 
* Vous pouvez prendre l'IDE de votre choix supportant Node.js, dans notre cas nous utiliserons :  <a href="https://code.visualstudio.com/download" title="Tuto">Visual studio code </a> 
* MongoDB 


## Comment configurer MongoDB 
Aller sur <a href="https://www.mongodb.com" title="Tuto">MongoDB </a> ![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/MongoDB.PNG)

Cliquer sur l'icone en haut à droite de la page nommé : **Try Free** et rentrer les informations nécessaires à la création de votre compte:
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/Inscription.PNG)

Une fois votre compte créé, MongoDB vous prpose 3 formules, dans notre cas la formule gratuite sera suffissante: 
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/next.PNG)
Ainsi, nous avons accès à une base de données sur le cloud. <br/> 
MongoDB vous porpose alors de séléctionner les propriétés de votre espace comme sur la photo suivante.  Dans notre cas, nous avons choisi d'utiliser le serveur AWS d'Amazon, de choisir le serveur situé en Virginie (plus proche de notre localisation) et de renommer le Cluster par ProjetNode. 
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/parametres.PNG)
Une fois la sélection faite, vous pouvez cliquer sur **Create cluster**. Une fois cela fait, votre espace prendra quelques minutes pour être complètement fonctionnel. Nous utiliserons ce temps de mise en place pour commencer le projet. 
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/miseenplace.PNG)
<br/> 

## Création de notre projet 

Une fois toute les installations requises effectuées, vous pouvez créer un dossier intitulé projetFilm dans le répertoire de votre choix. 
<br/>
Ouvrer le dossier dans Visual Studio Code: 
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/VSCFolder.PNG)
Une fenêtre apparaitra et vous pourrez ainsi ouvrir le dossier que vous avez créé précedement.<br/>
Dans VSC, vous aller ouvrir le terminal: 
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/VSCTerminal.PNG)

Vous serez donc situer dans le dossier créé:
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/VSCTerminalview.PNG)
Taper la commande suivante qui vous permettra d'initialiser le projet à l'aide de npm (node package manager):
```
npm init 
``` 
ensuite écriver dans le terminal : 
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
