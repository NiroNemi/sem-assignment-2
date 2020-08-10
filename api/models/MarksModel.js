var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MarksSchema = new Schema({
    mark:{type: Number, required: true},
    subjectId:{type: mongoose.Schema.ObjectId, required: true, ref: 'Subject'},
    studentId:{type: mongoose.Schema.ObjectId, required: true, ref: 'Student'},
}, {timestamps: true})

module.exports = mongoose.model('Marks', MarksSchema);