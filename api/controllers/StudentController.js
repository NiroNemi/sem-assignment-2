var mongoose = require('mongoose');
const StudentModel = require('../models/StudentModel');

Student = mongoose.model('Student');

exports.getAllStudents = function(req, res) {
    
    Student.find({}, function(err, students) {
        if(err) {
            res.json({status: false, data: 'Invalid Request!'});
        }

        res.json({status: true, data: students});
    });
};

exports.createStudent = function(req, res) {
    var newStudent = new Student(req.body);

    newStudent.save(function(err, student) {
        if(err) {
            return res.json({status: false, data: 'Unable to create!'});
        }

        res.json({status: true, data: student});
    });
};

exports.updateStudent = function(req, res) {
    Student.findOneAndUpdate({_id: req.params.stuId}, req.body, {new: true}, function(err, student) {
        if(err) {
            res.json({status: false, data: 'Unable to update!'});
        }

        res.json({status: true, data: student});
    })
};