var mongoose = require('mongoose');

var filmSchema = new mongoose.Schema({
    titre: String,
    affiche: String,
    synospsis: String,
    date: String,
    realisateur:String,
    types:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Type' // ces objectsId sont des ref du modeles  type
        }
    ]
});