import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongo.js"

import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () =>{
    console.log(`Server Listen on port ${PORT}`);
    connectMongoDB();
});

//e0OJSVksDbz664TV