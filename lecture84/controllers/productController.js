const Product = require('../models/productModel');

// buisneess logic

const getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find({});
        if(!allProducts || allProducts.length === 0) {
            return res.json({
                success: false,
                message: "There in no product."
            });
        }
        res.status(200).json({
            success: true,
            products: allProducts
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message 
        });
    }
};

const createProduct = async (req, res) => {
    try{
        const { name, price, description, category } = req.body;
        const missingFields = [];
        if (!name) missingFields.push("name");
        if (!price) missingFields.push("price");
        if (!description) missingFields.push("description");
        if (!category) missingFields.push("category");

        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: "Validation error.",
                errors: missingFields.map(field => `${field} is required`),
            });
        }
        const newProduct = new Product({ name, price, description, category });
        await newProduct.save();
        res.status(201).json({
            success: true,
            product: newProduct
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message 
        });
    }
};

const updateProduct = async (req, res) => {
    // To be implemented
}

const deleteProduct = async (req, res) => {
    // To be implemented
}

module.exports = { getProducts, createProduct };