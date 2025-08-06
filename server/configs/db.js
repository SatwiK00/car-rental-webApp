import mongoose  from "mongoose";

const connectDB = async()=>{
    try{
        console.log('Attempting to connect to MongoDB...');
        
        mongoose.connection.on('connected',()=>console.log('Database Connected'));
        mongoose.connection.on('error',(err)=>console.log('Database connection error:', err));
        mongoose.connection.on('disconnected',()=>console.log('Database Disconnected'));
        
        await mongoose.connect(`${process.env.MONGODB_URI}/car-rental`)
        console.log('MongoDB connection successful');
    }catch(error){
        console.log('Database connection failed:', error.message);
    }
}

export default connectDB;