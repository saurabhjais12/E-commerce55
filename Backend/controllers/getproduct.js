const productmodel = require("../models/productmodel");

const getproductcontroller = async (req, res) => {
    try {
        const allproduct = await productmodel.find().sort({ createdAt: -1 });

        res.status(200).json({
            message: "All products retrieved successfully",
            error: false,
            success: true,
            data: allproduct,
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || "An error occurred while fetching products",
            error: true,
            success: false,
        });
    }
};

module.exports = getproductcontroller;
