const express = require('express');
const { createCandidate, getAllCandidate, editSingleCandidate } = require('../Controller/candidateController');
const router = express.Router();

router.get("/candidate",getAllCandidate)
router.post("/candidate",createCandidate)
router.patch("/candidate/:id",editSingleCandidate)
module.exports=router