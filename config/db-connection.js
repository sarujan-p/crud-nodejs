import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
  try {
    const url = process.env.DB_CONNECTION_URL;
    await mongoose.connect(url);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

export default connectDB;