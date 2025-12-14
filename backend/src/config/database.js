import mongoose, { connection } from "mongoose"         //structure of a database

const connectDB = async()=>{

    try {
        const coonectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`) //connect mongodb and mongodb_uri which we just root the .env file
        console.log(`\n mongoDB connected !!! ${connectionInstance.connection.host}`);  //tell me the adress of the connectionInstance
        
    } catch (error) {
        console.log("mongoDB connection Failed",error);
        process.exit(1)  //when the whole process done this process gets exit in one to another task        
    }
}

export default connectDB;