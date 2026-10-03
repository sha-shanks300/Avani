const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const subscriberRoute = require("./routes/subscriberRoute");
const adminRoutes = require("./routes/adminRoutes");
const productAdminRoutes = require("./routes/productAdminRoutes");
const adminOrderRoutes = require("./routes/adminOrderRoutes");



dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


const connectDB = require("./config/db");
const PORT = process.env.PORT || 3000;

//connect to mongodb database before handling any request
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (err) {
        res.status(500).json({ message: "Database connection failed" });
    }
});

app.get("/",(req,res)=>{
    res.send("WELCOME TO AVANI API");
});

// API ROUTES
app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/checkout",checkoutRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/upload",uploadRoutes);
app.use("/api",subscriberRoute);


//Admin 
app.use("/api/admin/users",adminRoutes);
app.use("/api/admin/products",productAdminRoutes);
app.use("/api/admin/orders",adminOrderRoutes);

// On Vercel the app is exported and run as a serverless function,
// so only start a long-running server when running locally.
if (!process.env.VERCEL) {
    app.listen(PORT,()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app;
