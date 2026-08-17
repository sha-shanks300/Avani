const express = require("express");
const Product = require("../models/Product");
const jwt = require("jsonwebtoken");
const { protect, admin } = require("../middleware/authMiddleware");
const router = express.Router();

//@route POST /api/products
//@desc Create a new product
//@access Private/Admin

router.post("/", protect, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
    } = req.body;
    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
      user: req.user._id,
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

// @route PUT /api/products/:id
// @desc Update an existing product ID
// @access Private/Admin

router.put("/:id", protect, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
    } = req.body;

    //Find product by ID
    const product = await Product.findById(req.params.id);

    if (product) {
      //Update product fields
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price !== undefined ? price : product.price;
      product.discountPrice = discountPrice || product.discountPrice;
      product.countInStock =
        countInStock !== undefined ? countInStock : product.countInStock;
      product.sku = sku || product.sku;
      product.category = category || product.category;
      product.brand = brand || product.brand;
      product.sizes = sizes || product.sizes;
      product.colors = colors || product.colors;
      product.collections = collections || product.collections;
      product.material = material || product.material;
      product.gender = gender || product.gender;
      product.images = images || product.images;
      product.isFeatured =
        isFeatured !== undefined ? isFeatured : product.isFeatured;
      product.isPublished =
        isPublished !== undefined ? isPublished : product.isPublished;
      product.tags = tags || product.tags;
      product.dimensions = dimensions || product.dimensions;
      product.weight = weight !== undefined ? weight : product.weight;

      //save the updated product
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route DELETE /api/products/:id
// @desc Delete a product by ID
// @access Private/Admin

router.delete("/:id", protect, admin, async (req, res) => {
  try {
    //Find the product by ID
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.deleteOne();
      res.json({ message: "Product removed" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @route GET /api/products
// @desc Get all products with optional query filters
// @access Public

router.get("/", async (req, res) => {
  try {
    const {
      collection,
      size,
      color,
      gender,
      minPrice,
      maxPrice,
      sortBy,
      search,
      category,
      material,
      brand,
      limit,
    } = req.query;

    let query = {};

    // 1. Filtering Logic
    if (collection && collection.toLowerCase() !== "all") {
      query.collections = collection;
    }

    if (category && category.toLowerCase() !== "all") {
      query.category = category;
    }

    if (material && material.toLowerCase() !== "all") {
      query.material = material;
    }

    if (brand && brand.toLowerCase() !== "all") {
      query.brand = brand;
    }

    if (gender && gender.toLowerCase() !== "all") {
      query.gender = gender;
    }

    // Size filter 
    if (size) {
      query.sizes = size;
    }

    // Color filter 
    if (color) {
      query.colors = color;
    }

    // Price range filter ($gte = greater than or equal, $lte = less than or equal)
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Search filter
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // 2. Sorting Logic
    let sort = {}; // Default: Newest products first
    if (sortBy) {
      switch (sortBy) {
        case "priceAsc":
          sort = { price: 1 }; // Low to High
          break;
        case "priceDesc":
          sort = { price: -1 }; // High to Low
          break;
        case "popularity":
          sort = { rating: -1 }; // Highest rated
          break;
        default:
          break;
      }
    }

    // 3. Query Execution with Optional Limit
    let productQuery = Product.find(query).sort(sort);

    if (limit) {
      productQuery = productQuery.limit(Number(limit));
    }

    const products = await productQuery;
    res.json(products);

  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route GET /api/product/new-arrivals
// @desc Retrieve latest 8 products - Creation date
// @access Public

router.get("/new-arrivals",async(req,res)=>{
    try {
        const newArrivals = await Product.find().sort({createdAt: -1}).limit(8);
        res.json(newArrivals);

    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});



// @route GET /api/product/best-seller
// @desc Retrieve the product with highest rating
// @access Public

router.get("/best-seller",async(req,res)=>{
    try {
        const bestSeller = await Product.findOne().sort({rating:-1});
        if(bestSeller){
            res.json(bestSeller);
        }else{
            res.status(404).json({message:"No best seller found"});
        }
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

// @route GET /api/products/similar/:id
// @desc Retrieve similar products based on the current product's gender and category
// @access Public
router.get("/similar/:id",async(req,res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({message:"Product not found"})
        }
        const similarProducts = await Product.find({
            _id: { $ne: id },
            gender: product.gender,
            category: product.category,
        }).limit(4)

        res.json(similarProducts);


    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});


// @route GET /api/products/:id
// @desc Get a single product by ID
// @access Public

router.get("/:id", async(req,res) => {
    try{
        const product = await Product.findById(req.params.id);
        if(product){
            res.json(product);
        }else{
            res.status(404).json({message:"Product Not Found"});
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error");

    }
});







module.exports = router;
