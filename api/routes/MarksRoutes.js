const express = require('express');
const router = express.Router();
const marks = require('../controllers/MarksController');


// // //Create new task
router.post('/', marks.addMarks);

//get all stu marks
router.get('/get-marks', marks.getAllMarksStudents);
// get one stu marks
router.get('/get-marks/:stuId', marks.getStudentsMarks);


// // //Edit a task
// router.put('/:taskId', todoList.updateATask);

// // //Delete a task
// router.delete('/:taskId', todoList.deleteATask);

module.exports = router;