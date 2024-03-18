const candidateModel = require("../Model/candidates");

const createCandidate = async (req, res) => {
    const body = req.body
    try {
        const postingData = new candidateModel(body);
        const savePostingData = await postingData.save();
        res.status(201).send(savePostingData)
    } catch (error) {
        res.status(404).send(error)
    }
}
const getAllCandidate = async (req, res) => {
    try {
        const allJobs = await candidateModel.find({});
        res.status(201).send(allJobs)
    } catch (error) {
        res.status(404).send(error)
    }
}
const editSingleCandidate = async (req, res) => {
    const updatedBody = req.body
    const requestedId = req.params.id
    console.log(requestedId)
    console.log(updatedBody)
    try {
        const allJobs = await candidateModel.findByIdAndUpdate(requestedId, updatedBody);
        res.status(201).send({allJobs,isUpdated:true})
    } catch (error) {
        res.status(404).send(error)
    }
}
module.exports = { createCandidate, getAllCandidate, editSingleCandidate }