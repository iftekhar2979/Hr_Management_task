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
        const allJobs = await jobModel.find({}).sort({createdAt:-1});
        res.status(201).send(allJobs)
    } catch (error) {
        res.status(404).send(error)
    }
}
const getAllPositions = async (req, res) => {
    try {
        let query=[
            {
              $unwind:   
                {
                  path: "$title",
                  includeArrayIndex: "string",
                  preserveNullAndEmptyArrays: false,
                },
            },
            {
              $group:
                {
                  _id: null,
                  positions: {
                    $addToSet: "$title",
                  },
                },
            },
          ]
        const allJobs = await jobModel.aggregate(query)
        console.log(allJobs)
        res.status(201).send(allJobs)
    } catch (error) {
        res.status(404).send(error)
    }
}
const geSingleJobs = async (req, res) => {
    try {
        const singleJob = await jobModel.findById(req.params.id);
        res.status(201).send(singleJob)
    } catch (error) {
        res.status(404).send(error)
    }
}
const deleteSingleJobs = async (req, res) => {
    console.log(req.params.id)
    try {
        const allJobs = await jobModel.findByIdAndDelete(req.params.id);
        res.status(201).send({ allJobs, isDeleted: true })
    } catch (error) {
        res.status(404).send(error)
    }
}
module.exports = { createJob,getAllPositions, getAllJobs, deleteSingleJobs,geSingleJobs }