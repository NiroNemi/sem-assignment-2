var mongoose = require('mongoose');
const SubjectModel = require('../models/SubjectModel');
Subject = mongoose.model('Subject');


exports.getAllSubjects = function(req, res) {
    
    Subject.find({}, function(err, subjects) {
        if(err) {
            res.json({status: false, data: 'Invalid Request!'});
        }

        res.json({status: true, data: subjects});
    });
};

exports.createSubjects = function(req, res) {
    var newSubjects = new Subject(req.body);

    newSubjects.save(function(err, subjects) {
        if(err) {
            return res.json({status: false, data: 'Unable to create!'});
        }

        res.json({status: true, data: subjects});
    });
};