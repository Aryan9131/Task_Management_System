const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String,
    },
    deadline: {
        type: Date,
        default: () => Date.now() // Correct way to set the default date
    },
    status: {
        type: String,
        enum: ["progress", "expires", "done"],
        default: "progress"
    },
    priority: {
        type: String,
        enum: ["high", "moderate", "low"],
        default: "low"
    },
    user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' 
    }
})

const Task=mongoose.model('Task', TaskSchema)

module.exports=Task