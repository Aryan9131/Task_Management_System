const Task =require('../models/Task');
const User = require('../models/User');
module.exports.create= async function(req, res){
   console.log('data get in create task : '+ JSON.stringify(req.body));
   const createdTask= new Task(req.body);
   await createdTask.save();
   const user=await User.findById(req.user._id);
   user.tasks.push(createdTask._id);
   await user.save();
   console.log("Created Task ->"+createdTask);
   return res.status(200).json({
      message:'task created !',
      newTask:createdTask
   })
}

module.exports.update=async function(req, res){
   console.log('data get in update --> '+JSON.stringify(req.body));
   const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
   await updatedTask.save();
   console.log('updatedTask -->'+updatedTask)
   return res.status(200).json({
      message:'done !',
      updatedTask :updatedTask
   })
}
module.exports.delete=async function(req, res){
   console.log('data get in delete --> '+JSON.stringify(req.params));

   await Task.deleteOne({_id:req.params.id});
   const user=await User.findById(req.user._id);
   user.tasks=user.tasks.filter((taskId)=>taskId.toString()!=req.params.id.toString());
   await user.save();
   return res.status(200).json({
      message:'task deleted !',
   })
}