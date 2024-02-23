import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './index.css';
import App from './App';

import ShoppingCart from './Components/ShoppingCart';
import Checkout from './Components/Checkout';
import ProductDetails from './Components/ProductDetails';
import Category from './Components/Category';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="shoppingCart" element={<ShoppingCart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route path="categories/:categoriesId" element={<Category />} />
      </Routes>
    </Router>
  </>
);
