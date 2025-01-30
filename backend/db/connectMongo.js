import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {

        const connect = await mongoose.connect(process.env.MONGO_URI);
        
    } catch (error) {
        console.log(`error connection to mongo: ${error.message}`);
        process.exit(1);

    }
}

export default connectMongoDB;