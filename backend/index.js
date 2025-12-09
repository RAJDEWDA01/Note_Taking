import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors";
import routes from './routes/note.route.js';

// 1. Initialize App & Config first so env vars are available
dotenv.config(); 
const app = express();
const port = process.env.PORT || 4003;

// 2. Middleware
app.use(express.json());
app.use(cors());

// 3. Database Connection (Only do this once!)
const connectDB = async () => {
    try {
        // Ensure your .env file has MONGO_URI (not MONGO_URL, keep naming consistent)
        await mongoose.connect(process.env.MONGO_URI, {
            // These options are often no longer needed in newer Mongoose versions, 
            // but harmless to keep if your connection requires them:
            tls: true,
            ssl: true, 
            serverSelectionTimeoutMS: 5000 
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
};

// Call the connection function
connectDB();

// 4. Routes
app.use("/api/v1/notes", routes);

// 5. Start Server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});