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

Ensuite, nous allons nous connecter à la base de donnée mongoDB.Pour ce faire, nous allons utilisé la base de données que nous avons créée sur le cloud. Retourner sur la page de mongoDB, normalement vous y trouverez le cluster que vous avez créé précedemment. 
Cliquez sur Connect puis remplissez les champs demandés.<br/>
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/MongoDBConnect.PNG)
<br/>
 Concernant l'adresse IP,choisissez votre IP actuelle pour plus de simplicité. (N'oubliez pas de cliquer sur *Add IP* )Puis créez le login et mot de passse de votre utilisateur Admin.(ces données vous permettront de vous connecter à la base de données)
<br/>
Cliquez ensuite sur *Choose a connection method* afin de choisir la méthode de connexion: 
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/MongoDBMethod.PNG)

Ensuite cliquez sur *Connect your application* <br/>
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/ConnectApp.PNG)
<br/>
Cette page devrait apparaitre, vérifiez bien que votre driver est bien Node.js puis copier la ligne du dessous en cliquant sur *copy*. Ce champs vous permettra de vous connecter à la base de donnée en remplaçant le champs **password** par votre mot de passe. <br/>
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/MongoDBCopy.PNG)
<br/>
Retournez sur votre fichier app.js et insérez les lignes suivantes à la suite des imports de librairies :
``` javascript
//Connexion à la base de données
mongoose.connect('<VOTRE LIEN>',() =>{
  console.log('connection à la database');
});
``` 
Afin de sécuriser cette connexion ( car ici votre login et votre mot de passe apparaissent en clair), nous allons télécharger le package dotenv qui permet de créer des variables globales dont la valeur n'est visible que par votre application. Pour ce faire, tapez les lignes suivantes dans votre terminal 
 ``` javascript
npm install dotenv
``` 
Une fois, ce package installé, créez un fichier .env à la racine de votre projet et inscrivez la ligne suivante :
```
DB_CONNECTION=<VOTRE LIEN>
```
Retournez sur le fichier app.js et ecriver cela : 
```javascript
require('dotenv/config');
//mongoose.connect('mongodb://localhost/film');
mongoose.connect(process.env.DB_CONNECTION,() =>{
  console.log('connection à la database');
});
var db= mongoose.connection;
db.on('error',console.error.bind(console,'connection error :'));
db.once('open', function(){
  console.log('connecte à la bd');
});

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
	<link rel="stylesheet" href="css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <h1>Ma super base de films</h1>
        {% block content%}{% endblock%}
        <hr>
        <div class="text-center">
            Copyright Architecture 2020
    </div>
    
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
<br/>
Créez ensuite un nouveau dossier à la racine de l'application que l'on va appelé models et qui nous servira à definir nos modèles de données. Nous avons deux types de données, c'est pourquoi il faudra créer dans ce répertoire deux fichiers :
* Films.js
* Type.js
<br/>

Dans le fichier Films.js, vous allez créer le schéma des films. Cela permettra de pouvoir vérifier les caractères lors de leur ajout à la base de données. 
``` javascript
var mongoose = require('mongoose');

var filmSchema = new mongoose.Schema({
    titre: {
        type: String,
        required : true
    },
    affiche: String, // chemin de l'image
    synopsis: {
        type: String,
        required : true
    },
    date: String,
    realisateur:{
        type: String,
        required : true
    },
    types:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Type' // ces objectsId sont des ref du modele type
        }
    ]
});

var Films = mongoose.model('Films',filmSchema);

module.exports = Films; 
```
Pour rendre certains paramètres obligatoires, on ajoute l'attribut *required* à true. 
Le champs *type* est un tableau car un film peut avoir plusieurs types (horreur et animation par exemple). Il fera lien avec les types qui seront definis dans le fichier Types.js.
<br/>
*module.exports* vous permettra d'exporter le modèle que vous venez de définir, afin de le réutiliser dans d'autres parties de votre applications. 
<br/>
Ensuite, il faut faire de même avec le fichier Types.js :
```javascript
var mongoose =require('mongoose');

var typeSchema = new mongoose.Schema({
    name: String
});

typeSchema.virtual('Films',{
    ref:'Films',
    localField: '_id', // id du modèle Types
    foreignField: 'types' // le champs types du modèle films
});

var Types = mongoose.model('Types',typeSchema);

module.exports = Types;
``` 
*typeSchema.virtual* permet de créer un champs non-stocké dans la base de données. Il peut s'agir dans champs calculé ou définir des relations entres plusieurs types. Ici, on cherche à définir un lien entre films et types.
<br/>

Ensuite, vous allez créer un nouveau dossier à la racine du projet que vous nommerez **routes** . Dans ce dossier, vous allez créer deux fichiers :
* films.js
* types.js

Ces deux fichiers permettront de distinguer les routes pour les films et celles pour les types.
Dans le fichier films.js: écrivez : 
``` javascript
// instancie un routeur
var router = require('express').Router();

//exporter le routeur pour le réutiliser
module.exports = router;
```
Le router nous permettra d'executer des actions en fonction du chemain (path) appelé dans le navigateur. 
<br/>
Faites de même pour le fichier types.js : 
``` javascript
// instancie un routeur
var router = require('express').Router();

//exporter le routeur pour le réutiliser
module.exports = router;
```
Une fois cela fait, retourner dans le fichier app.js, afin d'y ajouter quelques lignes : 
```javascript
//récuperer les différents modèles créés
 require('./models/Films');
 require('./models/Types');

//utiliser le router en fonction des adresses demandées dans le navigateur
app.use('/',require('./routes/films'));
app.use('/types', require('./routes/types'));
``` 
Ainsi, une fois nos router déclarés, nous pouvons compléter les fichiers les concernants. Ainsi, dans le fichier films.js, veuillez écrire : 
``` javascript
var Films = require('./../models/Films);
var Types = require('./../models/Types');
//instancie la page  d'acceuil
router.get('/', (req,res)=> {
    Films.find({}).populate('types').then(films => {
        res.render('films/index.html',{films: films});
    })
});
```
Les deux *require* permettent de récu^pérer les différents modèles. *.find({})* signifie que nous voulons récuperer tous les films de la base de données. *populate* permet de dire a mongoose de recuperer tous les types associés aux films. *.res.render* permet de faire le rendu de la page films/index.html avec la variable films. 
<br/>
Cette vue n'étant pas encore créée, nous allons le faire. Dans le fichier views -> films, créez un fichier **index.html** .
Dans ce fichier, vous écrivez : 
``` html
{% extends"layout.html"%} 

{% block content %}
    <h2>Films</h2>

    {% for p in films %}
        <div class="panel panel-default">
            <div class="panel-heading">
                {{p.titre}}
            </div>
            <div class="panel-body">
               Date: {{p.date}}  <br/>
               Realisateur:  {{p.realisateur}}
            </div>
        </div>
    {% endfor %}

{% endblock %}
```
On change alors le contenu du block content inscrit dans la page layout.html . Ce que vous venez d'écrire permettra de réaliser une boucle sur tous les films contenus dans votre base de données et d'en afficher le titre et la synopsis. 

Ouvrer votre navigateur et tapez l'adresse : localhost:3000, votre affichage devrait ressembler à celui-ci: 
<br/>
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/ResultatCSS.PNG)
<br/>
si ce n'est pas le cas, remplacez la ligne comportant le href de bootstrap par celle la : <br/>
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
``` 
<br/>
On cherche ensuite à créer une vue pour afficher qu'un seul film et non toute la liste des films. Pour cela,dans views -> films, ajouter un fichier **show.html** et écrivez les lignes suivantes :.
<br/> 

``` html
{% extends "layout.html" %} 

{% block content %}
   <div class="row">
       <div class="col-sm-3">
       </div>
       <div class="col-sm-9">
           <h2>{{films.titre}}</h2>
           <p class="lead">
              Realisateur:  {{p.realisateur}} <br/>
              Synopsis :  {{p.synopsis}} <br/>
               Date: {{p.date}}  
                      
           </p>
           <h3>Types : </h3>
           {% for t in films.types %}
           <span class="label label-default">
             {{t.name}}  
           </span>
           {% endfor %}
       </div>
   </div>

{% endblock %}
```  
<br/>
On récupère l'intégralité des paramètre du films et on réalise donc une boucle qui nous permettra de récupérer tout les types d'un film. <br/>
Ensuite, il faut créer la route permettant d'y accéder. <br/>
Dans le fichier films.js, écrivez : 

``` javascript
//:id signifie que c'est un parametre de route
router.get('/:id',(req,res) => {
    Films.findById(req.params.id).populate('types').then(films => {
        res.render('films/show.html',{films: films});
    }, // si la fonction n'est pas éxécuté, on renvoie l'erreur brute
    err => res.status(500).send(err));
});
```
Comme précédemment, on récupère tous les attributs du films pour pouvoir les afficher. <br/>
Afin de pouvoir afficher cette page, nous allons y faire référence dans le fichier **index.html**. Remplacez le contenu du pannel-heading par : <br/>
```html
 <a href="{{p._id}}">{{p.titre}}</a>
 ```
Maintenant que nousavons créé ces différentes vues, nous allons voir si l'affichage fonctionne. Pour cela, retourner sur MongoDB et cliquer sur **collections**. 
 <br/>
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/MongoDBCollection.PNG)
<br/>
Une fois que vous êtes dans collections, cliquez sur **Create Database** et remplissez le premier champs par *test* et le second champs du même nom que votre model ici *Films* : <br/>
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/MongoDBcreation.PNG)

Une fois les champs remplis, cliquer sur **Create**. Une fois cette opération réalisé, il faut ajouter une autre collection que l'on nommera *Types* en appuyant sur le petit ⊕ à côté de test comme indiqué ci-dessous et remplissez le champs, puis appuyer sur **Create**. <br/>
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/MongoDBCollection2.PNG)
<br/>
Tout d'abord, nous allons remplir la collection Types, pour cela, cliquez sur le bouton **insert documents** et remplir la pop-up comme ci dessous: <br/>
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/insertToCol.PNG)
<br/>
Puis cliquez sur le bouton **insert**. Vous venez donc de créer une entrée dans votre collection. 
Maintenant, nous allons remplir la collection Films, utiliser le même processus pour créer une nouvelle entrée et écrivez : 
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/insertTofilm.PNG)
<br/>
Faites attention a changer le format de types en *Array* et l'entrée de tableau en *ObjectId* et mettre la valeur de cet ObjectId par la valeur id du type créé précedemment. 
Vous pouvez ainsi créer d'autres entrée pour chaque collections.
<br/>
Relancer votre application à l'aide de la commande dans le terminal:
``` 
node app.js
```
En interrogeant localhost:3000: vous devriez voir votre film s'afficher :
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/AffichageHome.PNG)
En cliquant sur le lien *Titanic*, vous devriez voir toutes ses informations ainsi que son type:
<br/>
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/Titanic.PNG)
 <br/>
Dans le fichier layout.html, nous allons rajouter une base autour du champs "h1" afin de pouvoir revenir en tout temps à la page principale :
<br/>
``` html
    <a href='/'>
        <h1>Ma super base de films</h1>
    </a>
```

## Création d'un formulaire 

Afin de créer un formulaire pour la modification ou l'ajout de film, nous allons créer une nouvelle vue dans le fichier views -> Films, et nous l'appellerons **edit.html**
<br/>
Dans ce fichier, vous allez ecrire : <br/>
``` html
{% extends "layout.html" %}

{% block content %}
<form method="POST">
    <div class="form-group">
        <label for="titre">titre du film</label>
        <input type="text" id="titre" name="titre" class="form-control">
    </div>
    <div class="form-group">
        <label for="realisateur">Réalisateur du film </label>
        <input type="text" id="realisateur" name="realisateur" class="form-control" >
    </div>
    <div class="form-group">
        <label for="synopsis">Synopsis du film </label>
        <textarea name="synopsis" id="synopsis" class="form-control"></textarea>
    </div>
    <div class="form-group">
        <label for="date">date de diffusion du film </label>
        <input type="text" id="date" name="date" class="form-control">
    </div>
    <div class="form-group">
        <label for="file">affiche du film </label>
        <input type="file" id="file" name="file">
    </div>
        <input type="submit" class="btn btn-primary" value="Enregistrer" />
    </form>
{% endblock %}
```
Encore une fois, notre affichage hérite du fichier layout.html. La balise *form* permet de dire que nous allons décrire un formulaire. La balise *input type="text"* permet de créer des champs que vous allez pouvoir remplir. La balise *input type="submit" permet de créer un bouton et l'attribut *value* permet de renseigner ce qui sera écrit sur le bouton. 
<br/>
Une fois cette vue crée, nous allons créé les routes ainsi que la méthode "POST" permettant d'envoyer les informations à la base de données. 
Afin de créer les routes pour créer et modifier un film, nous allons modifié le fichier **films.js** 
Dans ce fichier, vous allez écrire les lignes suivantes en prennat attention à l'ordre des routes. Cela signifie que les deux routes suivantes doivent être indiquer avant la route *router.get('/:id',(req,res)*
 <br/>
``` javascript
//route pour ajouter un nouveau films
router.get('/new',(req,res)=> {
    var films = new Films();
    res.render('films/edit.html', { films: films});
});
//route pour modifier un film 
router.get('/edit/:id',(req,res)=> {
    Films.findById(req.params.id).populate('types').then(films =>{
        res.render('films/edit.html',{films: films});
    }); 
});

``` 
Ensuite dans le fichier edit.html, nous allons ajouter des paramètres afin de pouvoir afficher les attributs au cas où nous voudrions modifier un film. Votre fichier devrait ressembler à celui-ci : 
``` html
{% extends "layout.html" %}

{% block content %}
<form method="POST" >
    <div class="form-group">
        <label for="titre">titre du film</label>
        <input type="text" id="titre" name="titre" class="form-control" value="{{films.titre}}">
    </div>
    <div class="form-group">
        <label for="realisateur">Réalisateur du film </label>
        <input type="text" id="realisateur" name="realisateur" class="form-control" value="{{films.realisateur}}">
    </div>
    <div class="form-group">
        <label for="synopsis">Synopsis du film </label>
        <textarea name="synopsis" id="synopsis" class="form-control">{{films.synopsis}}</textarea>
    </div>
    <div class="form-group">
        <label for="date">date de diffusion du film </label>
        <input type="text" id="date" name="date" class="form-control" value="{{films.date}}">
    </div>
    <div class="form-group">
        <label for="file">affiche du film </label>
        <input type="file" id="file" name="file">
    </div>
        <input type="submit" class="btn btn-primary" value="Enregistrer" />
    </form>
{% endblock %}
``` 
Vous pouvez remarquer que notre formulaire ne prend pas encore en compte les différents types de films. Pour ce faire nous allons ajouter dans le formulaire avant la balise *input du bouton* une boucle  : <br/>

```html
   <div class="form-groupe">
        {% for types in types %}
            <label>
                 <input type="checkbox" name="types[]" value="{{types._id}}" {% if films.types.indexOf(types._id) != -1 %} checked {% endif %}>
                {{types.name}}
            </label>
         {% endfor %}
    </div>
``` 
Le type *checkbox* permet de créer des cases à cocher en fonction des types possibles. la boucle *if* permet lors d'une modification de pré-cocher les types du films. <br/>
Cela entraine des modifications sur le fichier **films.js**, en effet, il faut indiquer aux différentes routes qu'il faut récupérer les types de films. Les routes créés juste au dessus devraient être comme cela : <br/>
``` javascript
//route pour ajouter un nouveau films
router.get('/new',(req,res)=> {
    Types.find({}).then(types =>{
     var films = new Films();
    res.render('films/edit.html', { films: films, types: types, endpoint: '/' });   
    });
});
//route pour modifier un film 
router.get('/edit/:id',(req,res)=> {
    Types.find({}).then(types => {
        Films.findById(req.params.id)then(films =>{
            res.render('films/edit.html',{films: films, types: types, endpoint: '/' + films._id.toString() });
        });   
    });
});
```
Le paramètre **endpoint** correspond à l'URL du formulaire à appeler. 
Maintenant, relancer votre application à l'adresse : localhost:3000/new . Vous devez obtenir cette affichage: <br/>
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/Formulaire.PNG)
<br/>
et en allant à l'adresse: localhost/edit/*id d'un film* par exemple d'id du film Titanic, vous obtiendrez ceci : <br/>
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/Titanic2.PNG)
<br/>
Comme vous pouvez le constater, la case du type *horreur* est déjà coché.
<br/>
Nous devons maintenant gérer la gestion de l'image. Pour cela,  dans le fichier **app.js** : <br/>

```javascript
var multer =require('multer');

//configuration pour l'upload
var upload = multer({
  dest: __dirname + '/uploads'
});

//utilisation de upload dans le formulaire quand un champs s'appelle file tu sauvergarde dans le répertoire uplod
app.use(upload.single('file'));

app.use('/uploads', express.static(__dirname + '/uploads'));

```

Nous avons besoin de multer pour gérer les images. La ligne contenenant *upload.single('file')* permet d'indiquer que un champs s'appelle file dans le formulaire, on doit le sauvegarder dans le fichier uploads.
<br/>
Afin de télécharger multer, réaliser cette commande dans le terminal de VSC : <br/>
```
npm install multer --save
```
Maintenant, nous devons implémenter la route POST qui nous permettra de récupérer les informations pour les enregistrer dans la base de données. Dans le fichier **films.js** :<br/>
``` javascript 
router.post('/:id?', (req,res)=> {
    new Promise((resolve, reject)=>{
        //si le film est deja dans la base, on le récupère
        if(req.params.id){
            Films.findById(req.params.id).then(resolve,reject);
        }
        else{ // sinon on en crée un nouveau
            resolve(new Films())
        }
        //récupération des données du formulaire
    }).then(films=> {
        films.titre = req.body.titre;
        films.realisateur = req.body.realisateur;
        films.date = req.body.date;
        films.synopsis = req.body.synopsis;
        films.types = req.body.types;

        if(req.file) films.affiche = req.file.filename;

        return films.save();
    }).then(()=> {
        //redirection vers la page d'acceuil
            res.redirect('/')
    });
});
```

Promise est une fonction asynchrone qui peut être exécuter à n'importe quel moment.  *req.body* permet de récupérer les données du formulaire. 


Dans le formulaire, remplacer la première balise de form par ceci : 
```html
<form method="POST" action="{{endpoint}}" enctype="multipart/form-data">
``` 
Cela permet de dire au navigateur comment il doit encoder les données de notre formulaire. Ainsi, on peut récupérer notre affiche de film dans le formulaire.
<br/>
Il ne vous reste plus qu'à ajouter la ligne indiquant que vous allez afficher l'aaffiche du film, pour cela dans show.html ajouté dans la balise **div class="col-sm-3"**: 
<br/>
```html
 <img src="/uploads/{{films.affiche}}" alt="{{films.titre}}" width: 100%>

```
Dans show.html, nous allons rajouter un bouton permettant d'editer un film, avant la balise *p* rajouter la ligne suivante : <br/>
``` html
<a href="/edit/{{films._id}}" class="btn btn-default">Editer</a>
```
De la même manière sur la page d'accueil, on ajoute un boutou permettant d'ajouter un nouveau film. Ainsi dans le fichier **index.html** ajoutez après la balise h2 : 
``` html
 <a href="/new" class="btn btn-primary">Ajouter un film</a>
 <hr>
``` 
Ensuite, on cherche à réaliser une page sur laquelle les films peuvent être référencé selon leur types, pour cela, dans le dossier views-> types, créez un fichier show.html dans lequel vous écrirez : 
```html
{% extends layout.html %}

{% block content %}
<h2>Les films de type <span>{{types.name}}</span></h2>
<hr>
{% for p in films %}
<div class="panel panel-default">
    <div class="panel-heading">
       <a href="{{p._id}}">{{p.titre}}</a>
    </div>
    <div class="panel-body">
       Date: {{p.date}}  <br/>
       Realisateur:  {{p.realisateur}}
    </div>
</div>
{% endfor %}

{% endblock %}
```

 Definissez la route dans le fichier **types.js** ajoutez : <br/>
``` javascript
var router = require('express').Router();

var Films=require('./../models/Films')
var Types =require('./../models/Types');

router.get('/:types',(req,res)=>{
    Types.findOne({name: req.params.types}).populate('Films').then(types =>{
           if(!types) return res.status(404).send('Types introuvables');

            res.render('types/show.html',{
                types: types,
                films: types.Films,
            })
    });
});

module.exports = router;
```
Cette route permet de trouver le type passé en paramètres et de rechercher tous les films qui lui sont associés. Comme MongoDB est sensible à la casse, on ajoute la condition *if* permettant d'indiquer à l'utilisateur que le type qu'il recherche n'est pas valide. 
<br/>
Afin de faire référence à la page regroupant les types, dans le fichier view ->films-> show.html, nous allons remplacer la balise span par la balise a et nous allons faire référence à la page comportant les types. <br/>
``` html
 <a href='/types/{{t.name}}' class="label label-default">{{t.name}}</a>
```

Maintenant, il ne nous reste plus qu'à créer une route pour supprimer un film. 
Dans le fichier films.js, en prenant soin de toujours écrire cette route avant la route *:id*:

``` javascript
router.get('/delete/:id',(req,res)=>{
    Films.findOneAndRemove({_id: req.params.id}).then(()=>{
        res.redirect('/');
    });
});
```
*findOneAndRemove* permet de récupérer un film selon son id et de le retirer de la base de données. La ligne *res.redirect* permet de rediriger l'utilisateur sur la page d'accueil.

Dans le fichier views->films-> show.html, ajouter en dessous de la ligne du bouton editer : 
``` html
<a href="/delete/{{films._id}}" class="btn btn-danger">Supprimer</a>
<hr>
```
Cela permet de créer un bouton Supprimer dans la page d'affichage d'un film.
Voici, les pages que vous devriez obtenir apres avoir relancer votre application :

Liste des films par types:<br/>
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/Types.PNG)
<br/>


affichage d'un film avec bouton de modification ou de suppression. <br/>
![](https://github.com/Arashea/ProjetArchitecture/blob/master/image/TitanicAffichage.PNG)
<br/>

## Vous pouvez être fier de vous !

Vous enez de terminer ce tuto. Vous avez donc un site fonctionnel qui vous permez d'afficher des films en listes ou par types. Vous avez également la possibilité de créer, éditer ou supprimer des films de votre base de donnée. 