const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const products = require("./data/products");

dotenv.config();


// Connect to mongoDB

mongoose.connect(process.env.MONGO_URI);

//Function to seed data

const seedData = async () =>{
    try{
        //clear exisiting data
        await Product.deleteMany();
        await User.deleteMany();
        //create a default 
        const createdUser = await User.create({
            name: "Admin User",
            email: "sangitapp2026@gmail.com",
            password: "shashhAVANI67123456789!@#$%^&*(",
            role: "admin",
        });

        //Assign the default user ID to each product

        const userID = createdUser._id;

        const sampleProducts = products.map((product)=>{
            return {...product, user:userID};
        });

        //Insert the products into the database
        await Product.insertMany(sampleProducts);
        

        console.log("Product data seeded successfully!");
        process.exit();

    }catch(error){
        console.error("Error seeding the data",error);
        process.exit(1);
    }

    
};

seedData();