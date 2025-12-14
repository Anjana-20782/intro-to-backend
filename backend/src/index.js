import dotenv from "dotenv";   //which again help us to extract environment variables
import connectDB from "./config/database.js";

dotenv.config({
    path:'./.env'
});  //tell it to stop ;

const startServer = async () =>{
    try {
        await connectDB();

        app.on("error",(error) => {
            console.log("ERROR",error);
            throw error;
        });

        app.listen(process.env.PORT || 8000, () =>{
            console.log(`Server is running on port : ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.log(`Mongodb connection Failed!!`,err);
        
        
    }
}

startServer();