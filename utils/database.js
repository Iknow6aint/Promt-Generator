import mongoose from 'mongoose';


export const connectToDB = async () => {
    if (mongoose.connections[0].readyState) {
        // Use the existing database connection if it exists
        return;
    }

    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}