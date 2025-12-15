import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/database.js";

dotenv.config({ path: "./.env" });

const startServer = async () => {
  try {
    await connectDB();

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Connecting to MongoDB...", error);
  }
};

startServer();
