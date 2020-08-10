var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const studentSchema = mongoose.Schema({
    name:{type: String, required: true}
}, {timestamps: true})
module.exports = mongoose.model('Student', studentSchema);