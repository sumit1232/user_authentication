const mongoose = require('mongoose');
const connectDB = async() => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/demo`);
        console.log("DATABSE CONNECTED");
    } catch (error) {
        console.log("DATABASE CONNECTION ERROR");
        
        
    }
}

module.exports = connectDB;