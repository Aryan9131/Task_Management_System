const passport=require('passport')
const express=require('express');
const router=express.Router();
const TaskController = require('../../controllers/TaskController')

router.post('/create-task',passport.authenticate('jwt', {session:false}),TaskController.create)
// router.get('/task/:id',TaskController.getTask)
router.post('/update-task/:id',passport.authenticate('jwt', {session:false}),TaskController.update)
router.delete('/delete-task/:id',passport.authenticate('jwt', {session:false}),TaskController.delete)

module.exports=router