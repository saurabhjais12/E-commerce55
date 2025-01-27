import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
// import AdminPanel from "../Pages/adminPanel";
import AllProducts from "../Pages/AllProducts";
import AllUsers from "../Pages/AllUsers";
import CategoryProduct from "../Pages/CategoryProduct";
import ProductDetails from "../Pages/ProductDetails";
import SearchProduct from "../Pages/SearchProduct";
import AdminPanel from "../Pages/adminPanel";

const router =createBrowserRouter([
    {
    path : '/',
    element:<App/>,

    children: [
        {
            path:"",
            element: <Home/>

        },
        {
            path:"login",
            element:<Login/>
        },
        {
            path:"sign-up",
            element:<SignUp/>
        },
        {
            path:"forgot-password",
            element:"ForgotPassword"
        },
        {
            path : "product-category",
            element : <CategoryProduct/>
        },
        {
            path :"product/:id",
            element : <ProductDetails/>
        },
        { 
            path : "search",
            element : <SearchProduct/>

        },
        {
            path:"Admin-Panel",
            element:<AdminPanel/>,
            children:[
                {
                    path:'all-users',
                    element:<AllUsers/>
                },
                {
                    path:"all-products",
                    element:<AllProducts/>
                }
            ]
        },
    ]
    }
])
export default router;