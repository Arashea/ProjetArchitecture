var router = require('express').Router();

var Films = require('./../models/Films');
require('./../models/Types');
//instancie la page  d'acceuil
router.get('/', (req,res)=> {
    Films.find({}).populate('types').then(films => {
        console.log(films);
        res.render('films/index.html',{films: films});
    })
});
//:id signifie que c'est un parametres de routes
router.get('/:id',(req,res) => {
    Films.findById(req.params.id).populate('types').then(films => {
        res.render('films/show.html',{films: films});
    }, // si la fonction n'est pas éxécuté, on renvoie l'erreur brute
    err => res.status(500).send(err));
});
module.exports = router;
// instancier un router qui est un middleware qui permet d'executer des action en fonction du path appeler dans le navigateur 
// 