const productmodel = require("../models/productmodel")

// to display on home all product category wise 
const getCategoryWiseProduct = async (req, res) => {
    try {
        const { category } = req?.body
        const product = await productmodel.find({ category })

        res.json({
            data: product,
            message: "product",
            success: true,
            error: false
        })

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })

    }

}
module.exports = getCategoryWiseProduct;