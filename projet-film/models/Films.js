var mongoose = require('mongoose');

var filmSchema = new mongoose.Schema({
    titre: String,
    affiche: String, // chemin de l'image
    synopsis: String,
    date: String,
    realisateur:String,
    types:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Type' // ces objectsId sont des ref du modele type
        }
    ]
});

var Films = mongoose.model('Films',filmSchema);

module.exports = Films; //exporter le modèle pour le réutiliser dans d'autres parties de l'applications