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

Vous serez donc situés dans le dossier créé:
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/VSCTerminalview.PNG)
Taper la commande suivante qui vous permettra d'initialiser le projet à l'aide de npm (node package manager):
```
npm init 
``` 
**Attention** : il se peut que le terminal de Visual Studio Code ne soit pas assimiler au terminal de node, redémarrer VSC si cela ne fonctionne pas, redémarrer l'ordinateur. <br/>
Nous allons ensuite configurer le projet, nous allons garder toute les valeurs par défaut ( appuyer sur entrée jusqu'à valider la création du projet)
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/VSCConfig.PNG)
Un fichier nommé *package.json* sera crée dans votre dossier.  Il comportera les valeurs pas défaut de notre projet.
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/VSCPackagejson.PNG)
<br/>
Dans le cadre de notre projet, nous aurons besoin d'installer le framework Express pour faciliter la création du site web, ainsi que la librairie mongoose permettant de discuter avec la base de donnée MongoDB, le moteur de template nunjucks enfin boostrap qui est une librairie CSS permettant de personnaliser nos pages web. 
Ensuite écriver dans le terminal : 
```
npm install --save express mongoose nunjucks bootstrap
``` 
Laisser les installations se faire. Une fois terminé, le fichier packages.json sera modifier avec les nouvelles instances. De plus, un nouveau fichier sera créé et nommé *package-lock.json* .
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/VSCPackagejsonedit.PNG)
<br/>
Puis créer un fichier  s'intitullant :file_folder: app.js pour cela vous n'avez qu'à cliquer sur le petit icône comme sur la capture suivante: 
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/VSCNewFile.PNG)
<br/> 
Dans ce fichier, vous écrivez ls lignes de codes suivantes : 
``` javascript
//importation des librairies
var express = require('express');
var mongoose = require('mongoose');

// instancie une application express
var app = express(); 

app.get('/',(req,res) => {  
  res.send('Votre application fonctionne') // réponse envoyé au client
 });

//écoute de l'application sur le port 3000 de votre machine
console.log('Test lancé sur le port 3000');
app.listen(3000);
``` 
Lorsque l'on éxecute le requete GET à la racine de notre application, on renvoir la réponse contenue dans res.send. <br/>
Dans le terminal de VSC, afin de tester l'application: 
```
node app.js
``` 
Vous pouvez désormais aller sur votre explorateur à l'adresse : localhost:3000 
La page devrait afficher *Votre application fonctionne*	:grinning: ![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/WebFonctionne.PNG)

Une fois cette vérification faite, vous pouvez enlever les lignes de app.get. <br/>

Ensuite, nous allons nous connecter à la base de donnée mongoDB, cela nous permet de se connecter à la base de donnée qui se situe sur le serveur localhost. (attention, prenez garde à ce que mongoDB soit ouvert lors de cette manipulation) : 
``` 
mongoose.connect('mongodb://localhost/baseFilm')
``` 
Dans VSC, créez un nouveau dossier intitulé views. Puis dans ce nouveau dossier, nous allons créer deux nouveaux dossier et un fichier : 
* :file_folder: Films
* :file_folder: Type
* :page_facing_up: layout.html

Le dossier Films correspondra aux vues liés à nos films et le dossier Type fera référence aux vues liées au type de film (animation, horreur ...). Le fichier layout correpondra au ficher dont hériterons toute nos vues. 
<br/>
Afin d'utiliser nunjuncks comme moteur de template, il faut ajouter cette ligne dans app.js :
``` javascript
var nunjucks = require('nunjucks');

//Configurer nunjucks
nunjucks.configure('views',{
  // echapper tout les caractères html présent dans les variables
  autoescape: true,

  express: app
});
``` 
Une fois, ces lignes ajoutées, ouvrer le fichier layout.html et écrivez ceci : 
```html
<!DOCTYPE html>
<html lang="fr">
<head>
	<title>Ma base de films</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/boostrap.min.css">
</head>
<body>
    <h1>Ma super base de films</h1>
    {% block content%}{% endblock%}
    <hr>
    <div class="text-center">
        Copyright Architecture 2019
    </div>
</body>
</html>
``` 
La ligne comportant le *block content* est une ligne spécialisé pour nunjucks. En effet, ce moteur de template sait que c'est à ce moment que commence un block. Cela nous permettra d'utiliser le layout plusieurs fois et de changer uniquement le contenu du block content. Cela permet de ne pas dupliquer toute la partie au dessus.  
<br/>
Cependant, nous n'avons pas accès à bootstrap.min.css, pour y avoir accès nous devons aller dans le fichier app.js: 
```javascript
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
```
*__dirname* réfère au répertoire en cours où se trouve app.js et ce middleware a pour but d'assimiler le chemin /css au chemin donnée en paramètres.