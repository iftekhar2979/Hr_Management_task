const mongoose = require('mongoose')
const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
    },
    picture:{
        type:String,
        required:true
    },
    title: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    status: {
        type: String,

    },
    experience: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

})
const candidateModel = new mongoose.model('Candidate', candidateSchema)
module.exports = candidateModel
