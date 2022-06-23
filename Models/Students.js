const { Schema, model } = require('mongoose');

const studentsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String
    },
    month: {
        type: Number,
        required: true
    },
    group: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    }
});

module.exports = model('students', studentsSchema);
