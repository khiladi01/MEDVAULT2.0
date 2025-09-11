import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
      try {
          const connectionDB = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
          console.log(`MongoDB Connected Successfully: ${connectionDB.connection.host}`)
      } catch (error) {
        console.log("MongoDb Connection Error:" , error);
        process.exit(1); // Exit process with failure
      }
}

export { connectDB };