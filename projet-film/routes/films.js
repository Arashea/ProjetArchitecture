var router = require('express').Router();

var Films = require('./../models/Films');
var Types =require('./../models/Types');
//instancie la page  d'acceuil
router.get('/', (req,res)=> {
    Films.find({}).populate('types').then(films => {
        console.log(films);
        res.render('films/index.html',{films: films});
    })
});
//route pour ajouter un nouveau films
router.get('/new',(req,res)=> {
    Types.find({}).then(types =>{
     var films = new Films();
    res.render('films/edit.html', { films: films, types: types, endpoint: '/'});   
    });
});
//route pour modifier un film 
router.get('/edit/:id',(req,res)=> {
    Types.find({}).then(types => {
        Films.findById(req.params.id).then(films =>{
            res.render('films/edit.html',{films: films, types: types, endpoint: '/'+films._id.toString()});
        });   
    });
});

//:id signifie que c'est un parametres de routes
router.get('/:id',(req,res) => {
    Films.findById(req.params.id).populate('types').then(films => {
        res.render('films/show.html',{films: films});
    }, // si la fonction n'est pas éxécuté, on renvoie l'erreur brute
    err => res.status(500).send(err));
});

router.post('/:id?', (req,res)=> {
    new Promise((resolve, reject)=>{
        if(req.params.id){
            Films.findById(req.params.id).then(resolve,reject);
        }
        else{
            resolve(new Films())
        }
    }).then(films=> {
        films.titre = req.body.titre;
        films.realisateur = req.body.realisateur;
        films.date = req.body.date;
        films.synopsis = req.body.synopsis;
        films.types = req.body.types;

        if(req.file) films.affiche = req.file.filename;

        return films.save();
    }).then(()=> {
            res.redirect('/')
    },err => console.log(err));
});

module.exports = router;
// instancier un router qui est un middleware qui permet d'executer des action en fonction du path appeler dans le navigateur 
