const express = require('express');
const { getAllJobs, createJob, deleteSingleJobs,geSingleJobs, getAllPositions } = require('../Controller/jobController');
const router = express.Router();

router.get("/jobs",getAllJobs)
router.get("/jobs/:id",geSingleJobs)
router.get('/postions',getAllPositions)
router.post("/jobs",createJob)
router.delete("/jobs/:id",deleteSingleJobs)

module.exports=router