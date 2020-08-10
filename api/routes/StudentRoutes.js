const express = require('express');
const router = express.Router();
const student = require('../controllers/StudentController');

//Get all tasks
router.get('/', student.getAllStudents);

// //Create new task
router.post('/', student.createStudent);

// // //Get single task
// router.get('/:taskId', todoList.readASingleTask);

// // //Edit a task
router.put('/:stuId', student.updateStudent);

// // //Delete a task
// router.delete('/:taskId', todoList.deleteATask);

module.exports = router;