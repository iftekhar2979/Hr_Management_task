const express = require('express');
const { getAllJobs, createJob, deleteSingleJobs } = require('../Controller/jobController');
const router = express.Router();

router.get("/jobs",getAllJobs)
router.post("/jobs",createJob)
router.delete("/jobs/:id",deleteSingleJobs)

module.exports=router