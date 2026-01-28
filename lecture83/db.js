const mongoose = require('mongoose');
// import dotenv package to read .env file
const dotenv = require('dotenv');
// load env configurations
dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;