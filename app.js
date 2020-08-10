var express = require('express');
const cors = require('cors');
var mongoose = require('mongoose');
var app = express();

app.use(cors());
var port = process.env.PORT || 3000;
var Task = require('./api/models/TodoListModel');
const Subject = require ('./api/models/SubjectModel')
const Marks = require ('./api/models/MarksModel')
const Student = require ('./api/models/StudentModel')

var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todo', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var taskRouters = require('./api/routes/TodoListRoutes');
var studentRouters = require('./api/routes/StudentRoutes');
var marksRouters = require('./api/routes/MarksRoutes');
var subjectRouters = require('./api/routes/SubjectRoutes');


app.use('/api/tasks', taskRouters);
app.use('/api/students', studentRouters);
app.use('/api/marks', marksRouters);
app.use('/api/subjects', subjectRouters);


app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found!'});
});

app.listen(port);

console.log('TodList Restful API server started on: '+port);