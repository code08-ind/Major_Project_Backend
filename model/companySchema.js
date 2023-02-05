const mongoose = require('mongoose');
const validator = require('validator');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
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
    contact: {
        type: String,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    streams:{
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    package: {
        type: String,
        required: true
    },
    jdLink:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
        required:true
    }
});

const Company = new mongoose.model('Company', companySchema);

module.exports = Company;