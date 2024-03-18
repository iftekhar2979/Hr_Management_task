const jobModel = require("../Model/jobs");

const createJob = async (req, res) => {
    const body = req.body
    try {
        const postingData = new jobModel(body);
        const savePostingData = await postingData.save();
        res.status(201).send(savePostingData)
    } catch (error) {
        res.status(404).send(error)
    }
}

const getAllJobs = async (req, res) => {
    try {
        const allJobs = await jobModel.findMany({});
        res.status(201).send(allJobs)
    } catch (error) {
        res.status(404).send(error)
    }
}
const deleteSingleJobs = async (req, res) => {
    try {
        const allJobs = await jobModel.findByIdAndDelete(req.param.id);
        res.status(201).send({ allJobs, isDeleted: true })
    } catch (error) {
        res.status(404).send(error)
    }
}
module.exports = { createJob, getAllJobs, deleteSingleJobs }