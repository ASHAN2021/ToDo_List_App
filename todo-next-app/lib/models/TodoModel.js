const { default: mongoose } = require("mongoose");

const Schema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    isComleted:{
        type: Boolean,
        default: false
    },
    
},
{
    timestamps: true
});

const TodoModel = mongoose.models.todo ||  mongoose.model('todo', Schema);
module.exports = TodoModel;