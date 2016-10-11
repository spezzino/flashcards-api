var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flashcardSchema = new Schema({
    topic: Array,
    title: String,
    question: String,
    answer: String,
    counters: {
        show: Number,
        correct: Number,
        incorrect: Number
    }
});

var Flashcard = mongoose.model('Flashcard', flashcardSchema);
module.exports = Flashcard;