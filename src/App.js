import React, {useState, useEffect} from 'react';
import './App.css';

import { getCategories, getProducts } from './fetchAPI';

import Category from './Components/Category';
import CategoryProduct from './Components/CategoryProduct';


function App() {
  //define data or property that need to be tracked
  const [categories, setCategories] = useState({errormessage: '', data:[]});
  const [products, setProducts] = useState({errormessage: '', data:[]});

  //initialize the store with fetching categories data from API
  useEffect(() => {
    //this function fetch categories data async and set the state
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }

    fetchData();
  }, [])

  //handle click on categories fetched from api and set the product state
  const handleCategoryClick = (id) => {
    //fetch product data 
    const fetchData = async () => {
      const responseObject = await getProducts(id);
      setProducts(responseObject);
    }

    fetchData();
  }

  //render category component
  const renderCategories = () => {
    return categories.data.map(c => 
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick={() => handleCategoryClick(c.id)}/>
    );
  }

  //render product component
  const renderProducts = () => {
    return products.data.map(p => <CategoryProduct {...p}>{p.title}</CategoryProduct>);
  }


  return (
    <>
    <header>My Store</header>

    <section>
      <nav>
        { categories.errormessage && <div>Error: {categories.errormessage}</div>}
        { categories.data && renderCategories() }
      </nav>

      <main>
        <h1>Products</h1>
        { products.errormessage && <div>Error: {products.errormessage}</div>}
        { products.data && renderProducts()}
      </main>
    </section>
    
    <footer>
      Footer
    </footer>
    </>
  );
}

export default App;
