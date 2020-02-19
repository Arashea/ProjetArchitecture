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
            ref: 'Types' // ces objectsId sont des ref du modele type
        }
    ]
},{
    collection: 'Films'
});

var Films = mongoose.model('Films',filmSchema);

module.exports = Films; //exporter le modèle pour le réutiliser dans d'autres parties de l'applications