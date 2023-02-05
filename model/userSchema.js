const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: [true, "Email Id Should Not Be Same."],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email Address');
            }
        }
    },
    password:{
        type:String,
        required:true,
    }
});

const User = new mongoose.model('User', userSchema);

module.exports = User;