var mongoose = require('mongoose');
const MarksModel = require('../models/MarksModel');
Marks = mongoose.model('Marks');


exports.addMarks = function(req, res) {
    var newMarks = new Marks(req.body);

    newMarks.save(function(err, marks) {
        if(err) {
            return res.json({status: false, data: 'Unable to create!'});
        }

        res.json({status: true, data: marks});
    });
};

exports.getStudentsMarks = async (req, res) => {
 try{
    const marks = await Marks.find({'studentId' : req.params.stuId}).populate('subjectId').populate('studentId');
    res.status(200).send({status: true, data: marks});
 } catch(e) {
    res.status(400).send({message: e.message, status: false})
 }
}; 

exports.getAllMarksStudents = async (req, res) => {
    try{
       const marks = await Marks.find({}).populate('subjectId').populate('studentId');
       res.status(200).send({status: true, data: marks});
    } catch(e) {
       res.status(400).send({message: e.message, status: false})
    }
   };