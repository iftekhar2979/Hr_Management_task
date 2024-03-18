const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const router = require("./Router/User")
const candidateRoute = require("./Router/candidate")
const jobsRoute = require("./Router/job")

const cors = require('cors')

require("./Database/connect")
require('dotenv').config()

app.use(cors())
app.use(express.json())
// app.options('*', cors()); 
app.use(express.urlencoded());
app.use(router)
app.use(candidateRoute)
app.use(jobsRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})