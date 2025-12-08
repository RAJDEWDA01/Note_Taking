import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from "cors";
import routes from './routes/note.route.js'


mongoose.connect(process.env.MONGO_URI, {
  tls: true,
  ssl: true,
  serverSelectionTimeoutMS: 5000
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));


const app = express()
dotenv.config()
const port = process.env.PORT || 4003

// Database Connection Code
try {
   mongoose.connect(process.env.MONGO_URL)
   console.log("conntected to MongoDB")
} catch (error) {
    console.log("Error connecting to MongoDB", error)
}

// Routing Middleware
app.use(express.json())
app.use(cors())
app.use("/api/v1/noteapp", routes)

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})