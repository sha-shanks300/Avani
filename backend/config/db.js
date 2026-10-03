const mongoose = require("mongoose");

// Reuse one connection across requests. On Vercel each warm function
// instance keeps this module in memory, so we only connect once per instance.
let connectionPromise = null;

const connectDB = async () => {
    if (mongoose.connection.readyState === 1) return mongoose.connection;
    if (!connectionPromise) {
        connectionPromise = mongoose.connect(process.env.MONGO_URI)
            .then((conn) => {
                console.log("Successfully connected to MongoDB");
                return conn;
            })
            .catch((err) => {
                connectionPromise = null;
                console.error("MongoDB connection failed.", err);
                throw err;
            });
    }
    return connectionPromise;
}

module.exports = connectDB;
