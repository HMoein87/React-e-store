import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { getProducts } from '../fetchAPI';
import CategoryProduct from './CategoryProduct';

//category component
const Category = () => {
  //category id parameter got by parameters in url
  const { categoriesId } = useParams();

  //products propery
  const [products, setProducts] = useState({errormessage: '', data: []})

  //fetch products of a specific category from API
  useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProducts(categoriesId);
      setProducts(responseObject);
    }

    fetchData();
  }, [categoriesId])

    //render products component
    const renderProducts = () => {
      return products.data.map(p => <CategoryProduct key={p.id} {...p}>{p.title}</CategoryProduct>);
    }

  return (
    <div>
      <h1>Products</h1>
        { products.errormessage && <div>Error: {products.errormessage}</div>}
        { products.data && renderProducts()}
    </div>
  )
}

export default Category;