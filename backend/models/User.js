const mongoose = require('mongoose');


// Define the main user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ],  
    avatar:{
        type:Object
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;