// fetch product categorywise to show on home page

import SummaryApi from "../common"

const fetchCategoryProduct =async(category)=>{
    const response = await fetch(SummaryApi.categoryWiseproduct.url,{
        method : SummaryApi.categoryWiseproduct.method,
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            category : category
        })
    })

    const dataResponse = await response.json()

    return dataResponse
}
export default fetchCategoryProduct