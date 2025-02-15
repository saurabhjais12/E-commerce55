//add to cart fetch details

const productmodel = require("../models/productmodel")

const getProductDetails = async(req,res)=>{
    try{
        const { productId } = req.body

        const product = await productmodel.findById(productId)

        res.json({
            data : product,
            message : "Ok",
            success : true,
            error : false
        })

        
    }catch(err){
        res.json({
            message : err?.message  || err,
            error : true,
            success : false
        })
    }
}

module.exports = getProductDetails