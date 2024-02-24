import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';

import { getCategories } from './fetchAPI';

import ShoppingCart from './Components/ShoppingCart';
import Checkout from './Components/Checkout';
import ProductDetails from './Components/ProductDetails';
import Category from './Components/Category';
import Layout from './Components/Layout';
import Home from './Components/Home';


function App() {
  //define data or property that need to be tracked
  const [categories, setCategories] = useState({errormessage: '', data:[]});
  
  //initialize the store with fetching categories data from API
  useEffect(() => {
    //fetch categories data async and set the state
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }

    fetchData();
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout categories={categories} />} >
          <Route index element={<Home />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="categories/:categoriesId" element={<Category />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
