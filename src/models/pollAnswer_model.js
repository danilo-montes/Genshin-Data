const mongoose = require('mongoose');

const PollAnswer = new mongoose.Schema({
    poll    : {type: Number, required: true}, // {type: mongoose.Schema.Types.ObjectId, ref: Poll, required: true},
    answer  : {type: String, required: true},
    pollee  : {type: String} // { type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true}
});

module.exports = mongoose.model('PollAnswer', PollAnswer);