# Introduction

Dans le cadre de notre projet, il nous a été proposé de réaliser un projet Node.Js en utilisant le framework Express.<br/>
N'ayant jamais étudié cet environnement, nous avons réalisé quelques recherches sur ces sujets que l'on vous présente ci-après. Vous trouverez ainsi le descriptif de ces technologies ainsi que les points forts de chacune de ces technologies.

# Mise en contexte 

Le Javascript a été créé en 1995 par Netscape afin de pouvoir manipuler les pages web en Frontend. <br/>
Depuis, ce langage est devenu de plus en plus populaire car tous les navigateurs ont un moteur Javascript qui permet de traduire le code Javascript en langage machine. Mais du côté serveur, les langages utilisés étaient le Php, le Java ou encore le Python. C'est ainsi que Node.js est apparu afin de permettre l'utilisation du Javascript à la fois du côté client et du côté serveur ce qui permet d'utiliser un seul et unique langage pour le Frontend et le Backend.

<img src="https://w3techs.com/diagram/history_technology/ws-nodejs"> 
La figure ci-dessus vous montre l'évolution de l'utilisation du Node.js dans les sites web de Janvier 2019 à Février 2020. Nous pouvons voir que son utilisation est en constante augmentation depuis un an jusqu'à s'approcher de la barre des 80% d'utilisation. 
<br/>
De plus, en comparaison avec d'autres serveurs web, Node.js est celui qui est utilisé par les sites de haut traffic. 
<img src="https://w3techs.com/diagram/market_technology/ws-nodejs"> 


# Présentation des technologies

   ## <img src="https://miro.medium.com/max/1200/1*X7a7F-yXRUAGLGLzdlGQMA.png" width="200"> 
  Node.js a été créé en 2009.
  Il s'agit d'un environnement d'éxecution Javascript qui est orienté évènement. Cet environnement utilise le compilateur Javascript V8 de Google. <br/>
  Cet environnement laisse une grande place à HTTP, ce qui en fait une base pour les librairies web ou les frameworks. <br/>
  Le node.js a un comportement similaire au Javascript dans le sens où il permet de réaliser des boucles événementielles, sans que l'utilisateur ne s'en rende compte.
  
  ### Avantages
  
  Utiliser Node.je comportent plusieurs avantages. 
* **Facile à apprendre** : le Javascript étant devenu un langage très populaire, il est plus facile de l'utiliser en Backend.
* **Gagner du temps et d'argent pour l'entreprise**: il faut savoir qu'avant l'apparition de node.js, le Javascript n'était utilisé que pour le Front-end et qu'il fallait un autre langage pour la partie Back-end.  Désormais, Les deux côtés peuvent être réalisé en Javascript (côté client et côté serveur). Le développeur Fullstack en Javascript est devenue une réalité.
* **Boucle évènementielle** : Node.js est basé sur une conception asynchrone, ce qui implique que les processus sont non-bloquants. Les processus peuvent donc être lancés en parallèles et seront traités au fil de l'eau. Ainsi, un très grand nombre de requêtes peuvent être traitées simultanément et efficacement. **Une forte montée en charge peut être supportée.** 
* **Communauté** : Internet regorge de cours en ligne, de webinaires ou de MOOC pouvant vous aider à en apprendre plus sur Node.js.
* **Modulaire** : NodeJs est très flexible. On peut commencer un projet de rien puis importer petits à petits des librairies créées par d'autres developpeurs et open source à l'aide de **npm** alias le Node Package Manager. On se retrouve ainsi avec un projet évolutif dans le temps.

   ## <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" width="200"> 
  
  A la suite de Node.js, Express a vu le jour en 2010.
Il s'agit d'un framework, minimal et flexible,d'application web Node.js.<br/>
 Vous pouvez ainsi :
* avoir accés à un set de fonctionnalité pour application web et mobile.
* créer des APIs (Application programming Interface) rapidement.
* avoir accés à une couche de fonctionnalité fondamentales des applications web (sans vous priver de celle de Node.js)
            
 De nombreux frameworks sont basés sur Express : 
* Kraken
* LoopBack

### Avantages
Utiliser Express vous donne quelques avantages : 
* **Réaliser des applications web plus facilement et rapidement** : plus besoin de partir de zéro pour créer votre application. 
* **Définir des routes** basé sur les méthodes HTTP et URL : Vous pouvez désormais vérifier des URL beaucoup plus facilement qu'avec simplement Node.js. 
* S'intègre facilement avec des moteurs de template comme Nunjucks, Jade, Vash.
* **Connexion facile avec MongoDB,MySQL** etc. 

# Exemples d'utilisation des différentes technologies

<img width="400"  src="https://github.com/Arashea/ProjetArchitecture/blob/master/image/Capture.PNG">  <img width="350"  src="https://miro.medium.com/max/5088/1*71nlu7Wn0vXdg2VBxi1gBA.png">
<br/>Node.js est utilisé par 5576 entreprises parmis lesquelles vous pouvez trouver Netflix, Twitter ou encore Uber. <br/>

Express, quant à lui, est utilisé par 1289 entreprises comme Twitter ou OpenTable (service de réservation de table dans les restaurants). <br/>
 
 Netflix, twitter 
 Ref: <a href="https://stackshare.io/nodejs" title="stackshare">Stackshare : Node.js</a><br/>
 Ref: <a href=" https://stackshare.io/expressjs" title="stackshare">Stackshare : Express</a><br/>



# Références bibliographiques
 
 Node.js à partir de <a href="https://nodejs.org/fr/about/" title="nodejs">nodejs.org</a><br/>
 Express à partir de <a href="https://expressjs.com" title="Expressjs">nodejs.org</a><br/>
 Rapport sur Node.js par <a href="https://w3techs.com/technologies/details/ws-nodejs" title="VSC">W3Techs</a><br/>
 Visual Studio : <a href="https://code.visualstudio.com/docs/?dv=win64user" title="VSC">Visual Studio</a><br/>
 Commencer Node.js et Express sous Windows 1 : <a href="https://medium.com/@zibon/getting-started-with-nodejs-and-expressjs-2018-51689dae024b" title="Medium">Medium.com</a><br/>
 Tutoriel Node.js avec Visual Studio Code : <a href="https://code.visualstudio.com/docs/nodejs/nodejs-tutorial" title="Tuto">VisualStudio.com </a> <br/>
 node js avantages :  https://www.supinfo.com/articles/single/6191-nodejs   +   https://www.smooth-code.com/articles/6-raisons-de-choisir-node-js  <br/>
 Express https://www.tutorialsteacher.com/nodejs/expressjs  <br/>
 
 


