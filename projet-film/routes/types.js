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