
const productmodel = require("../models/productmodel")

async function uploadproductcontroller(req,res){
    try {
        const uploadproduct =new productmodel(req.body)
        const saveproduct =await uploadproduct.save()
        
        res.status(200).json({
            message : "upload successfully",
            error : false,
            success : true,
            data : saveproduct
            
        })
    } catch (err) {
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
        
    }

}
module.exports= uploadproductcontroller