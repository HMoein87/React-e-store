const BASE_URL = "http://localhost:3001";

//fetch data async
const fetchAPI = async (url) => {
    //define response json object
    let responseObject = { errormessage: '', data: [] };
    //fetch data and create the response object
    try {
        const response = await fetch(BASE_URL + url);
        //check if response is ok
        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }
        const responseData = await response.json();
        responseObject.errormessage = '';
        responseObject.data = responseData;
    }
    //catch errors in fetching data
    catch(err) {
        responseObject.errormessage = err.message;
    }
    return responseObject;
}

//fetch categories data
export const getCategories = () => {
    return fetchAPI("/categories");
}

//fetch products data
export const getProducts = (id) => {
    return fetchAPI("/products?catId=" + id);
}

//fetch products data by their id
export const getProductsById = (id) => {
    return fetchAPI("/products/" + id);
}

//fetch products by query in serach input box
export const getProductsByQuery = query => {
    return fetchAPI('/products?q=' + query);
}