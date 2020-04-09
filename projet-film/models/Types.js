var mongoose =require('mongoose');

var typeSchema = new mongoose.Schema({
    name: String
},{
    collection: 'Types'
});


typeSchema.virtual('Films',{
    ref:'Films',
    localField: '_id', // id du modèle Types
    foreignField: 'types' // le champs types du modèle films
});

var Types = mongoose.model('Types',typeSchema);

module.exports = Types;