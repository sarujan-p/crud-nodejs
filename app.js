import express from 'express';
import db from './config/db-connection.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(express.json())

app.listen(process.env.PORT, () => { 
    console.log("server started")
    db()
})