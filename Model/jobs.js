const mongoose = require('mongoose')
const jobSchema = new mongoose.Schema({
    jobNo:{
        type:Number,
        required:true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    vacancy: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const jobModel = new mongoose.model('Jobs', jobSchema)
module.exports = jobModel
