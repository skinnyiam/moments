import express from "express"
import bodyParser from "body-parser"
import mongoose, { mongo } from "mongoose"
import cors from "cors"
import postRoute from "./routes/posts.js"
const app = express()
app.use('/posts', postRoute)
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const MONGO_URL = "mongodb+srv://moments:moments@cluster0.ewufqkr.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;
mongoose.connect(MONGO_URL)
    .then(() => app.listen(PORT, () => { console.log(`sever is running on port:${PORT}`) }))
    .catch((err) => console.log(err))