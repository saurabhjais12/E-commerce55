const express= require("express");
const userSignUpController = require("../controllers/signin");
// const userSignInController = require("../controllers/login");
const userDetailsController = require("../controllers/userdetails");
const authToken = require("../middleware/authtoken");
const logout = require("../controllers/logout");
const uploadproductcontroller = require("../controllers/uploadProduct");
const getproductcontroller = require("../controllers/getproduct");
const updateProductController = require("../controllers/updateProduct");
const getCategoryProduct = require("../controllers/getCategory.");
const getCategoryWiseProduct = require("../controllers/getCategoryWiseProduct");
const getProductDetails = require("../controllers/getProductdetails");
const searchProduct = require("../controllers/searchProduct");
const userSignInController = require("../controllers/login.js");


const router =express.Router();


router.post("/signup",userSignUpController );
router.post("/login",userSignInController);
router.get("/user-details",authToken,userDetailsController)
router.get("/logout",logout)


//upload product
router.post("/upload-product",authToken,uploadproductcontroller)
router.get("/get-product",getproductcontroller)

//update edit product
router.post("/update-product",authToken,updateProductController)

//update on home page in circle 
router.get("/get-categoryProduct" ,getCategoryProduct)

//update categorywise product to home page
router.post("/category-product",getCategoryWiseProduct)

//fetch detals for add to cart
router.post("/product-details",getProductDetails)

//search bar 
router.post("/search",searchProduct)



module.exports =router;