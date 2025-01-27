const backendDomain =" http://localhost:8002"

const SummaryApi = {
    signUp: {
        url: `${backendDomain}/api/signup`,
        method :"post"
    },
    login : {
        url :`${backendDomain}/api/login`,
        method:"post"
    },
    current_user : {
        url : `${backendDomain}/api/user-details`,
        method : "get"
    },
    logout_user :{
        url:`${backendDomain}/api/logout`,
        method: "get"

    },
    uploadproduct :{
        url :`${backendDomain}/api/upload-product`,
        method : "post"
    },
    allproduct :{
        url : `${backendDomain}/api/get-product`,
        method : "get"
    },
    updateProduct :{
        url :`${backendDomain}/api/update-product`,
        method : "post"
    },
    categoryProduct : {
        url : `${backendDomain}/api/get-categoryProduct`,
        method: "get"
    },
    categoryWiseproduct :{
        url :`${backendDomain}/api/category-product`,
        method :'post'
    },
    productDetails : {
        url : `${backendDomain}/api/product-details`,
        method : "post"
    },
    searchProduct :{
        url : `${backendDomain}/api/search`,
        method : "post"
    }
}

export default SummaryApi;