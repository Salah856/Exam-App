const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    text: { type: String },
    answer: [String],
}); 


module.exports = mongoose.model('Question', questionSchema);

