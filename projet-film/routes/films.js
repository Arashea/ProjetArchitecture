var router = require('express').Router();

var Films = require('./../models/Films');
//instancie la page  d'acceuil
router.get('/', (req,res)=> {
    Films.find({}).populate('types').then(films => {
        res.render('films/index.html',{films: films});
    })
});
module.exports = router;
// instancier un router qui est un middleware qui permet d'executer des action en fonction du path appeler dans le navigateur 
// 