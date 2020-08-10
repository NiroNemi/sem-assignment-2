const express = require('express');
const router = express.Router();
const subject = require('../controllers/SubjectController');
// module.exports = function(app) {
//     var todoList = require('../controllers/TodoListController');

//Todolist Route

//Get all tasks
router.get('/', subject.getAllSubjects);

// //Create new task
router.post('/', subject.createSubjects);

// // //Get single task
// router.get('/:taskId', todoList.readASingleTask);

// // //Edit a task
// router.put('/:taskId', todoList.updateATask);

// // //Delete a task
// router.delete('/:taskId', todoList.deleteATask);

module.exports = router;