const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
        trim: true
    },
    taskDeadline: {
        type: Date
    },
    taskDetails: {
        type: String,
        required: true
    },
    taskStatus: {
        type: Boolean,
        default: false
    },
    taskOwner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    }
});

module.exports = mongoose.model('task', TaskSchema);