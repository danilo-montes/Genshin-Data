const mongoose = require('mongoose');

const Weapon = new mongoose.Schema({
    name               : {type: String, required: true},
    class              : {type: String, required: true},
    rarity             : {type: Number, required: true},
    stats              : {type: Object, required: true},
    ascension_material : {type: mongoose.Schema.Types.ObjectId, ref: 'Material', required: true}
    // slug: {type: String, slug: "name"}
});

module.exports = mongoose.model('Weapon', Weapon);