const productmodel = require("../models/productmodel")

async function updateProductController(req,res){

    try {
        const {_id, ...resBody} =req.body 

        const updateProduct =await productmodel.findByIdAndUpdate(_id,resBody)

        res.status(200).json({
            data : updateProduct,
            error : false,
            success : true,
            message : "Product update Successfully"
        })

        
    } catch (err) {
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
        
    }

}
module.exports = updateProductController;
