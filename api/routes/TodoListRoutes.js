const express = require('express');
const router = express.Router();
const todoList = require('../controllers/TodoListController');
// module.exports = function(app) {
//     var todoList = require('../controllers/TodoListController');

//Todolist Route

//Get all tasks
router.get('/', todoList.listAllTasks);

// //Create new task
router.post('/', todoList.createATask);

// //Get single task
router.get('/:taskId', todoList.readASingleTask);

// //Edit a task
router.put('/:taskId', todoList.updateATask);

// //Delete a task
router.delete('/:taskId', todoList.deleteATask);

module.exports = router;