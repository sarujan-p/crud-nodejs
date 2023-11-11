const express = require('express')
const mongoose = require('mongoose')
const employeeRouter = require('./routes/employee')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use('/', employeeRouter)

const DB_CONNECTION_URL = process.env.DB_CONNECTION_URL
const PORT = process.env.PORT || 5000

mongoose.connect(DB_CONNECTION_URL)
    	.then(() => app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
            console.log(`Database connected`)
        })).catch((err) => {
            console.log("Something went wrong!");
        })

