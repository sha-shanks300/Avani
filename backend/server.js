const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


const connectDB = require("./config/db");
const PORT = process.env.PORT || 3000;

//connect to mongodb database
connectDB();

app.get("/",(req,res)=>{
    res.send("WELCOME TO AVANI API");
});

// API ROUTES
app.use("/api/users",userRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})