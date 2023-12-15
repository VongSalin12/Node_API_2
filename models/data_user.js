const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        _id:{
            type:Number,
            require:true
        },
        name: {
            type: String,
            required: [true, "Please enter a name"]
        },
        course: {
            type: String,
            required: [true,"please enter a course."],
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true
    }
)
const User = mongoose.model('User', UserSchema);

module.exports = User;