var mongoose =require('mongoose');

var typeSchema = new mongoose.Schema({
    name: String
});

//virtual champs non stocké dans la base de données mais qui est utilisable
//permet de creer un champs calculer ou de definir des relations entre les différents types

typeSchema.virtual('Films',{
    ref:'Films',
    localField: '_id', // id du modèle Types
    foreignField: 'types' // le champs types du modèle films
});

var Types = mongoose.model('Types',typeSchema);

module.exports = Types;