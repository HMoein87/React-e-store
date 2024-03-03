import React, {useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';

import { getProductsByQuery } from '../fetchAPI';
import CategoryProduct from './CategoryProduct';


//search result component to show the search result
const SearchResults = () => {
    //products propery
    const [products, setProducts] = useState({errormessage: '', data: []});

    //get the query from saech using usesearchparams hook
    let [searchparams] = useSearchParams();
    let query = searchparams.get("s");

    //fetch products of a specific category from API using query
    useEffect(() => {
        const fetchData = async () => {
        const responseObject = await getProductsByQuery(query);
        setProducts(responseObject);
        }

        fetchData();
    }, [query]);

    //render products component
    const renderProducts = () => {
        if (products.data.length > 0) {
            return products.data.map((p) => (
                <CategoryProduct key={p.id} {...p}>
                    {p.title}
                </CategoryProduct>
            ));
        }
        else {
            return <div>No results found</div>
        }
    }

    return (
        <div>
            <h1>Products</h1>
            { products.errormessage && <div>Error: {products.errormessage}</div>}
            {renderProducts()}
        </div>
    )
}

export default SearchResults