import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import { getCategories, getProducts } from './fetchAPI';

import CategoryProduct from './Components/CategoryProduct';


function App() {
  //define data or property that need to be tracked
  const [categories, setCategories] = useState({errormessage: '', data:[]});
  const [products, setProducts] = useState({errormessage: '', data:[]});

  //initialize the store with fetching categories data from API
  useEffect(() => {
    //fetch categories data async and set the state
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
      <li key={c.id}><Link to={`categories/${c.id}`}>{c.title}</Link></li>
      );
  }

  return (
    <>
    <header>My Store</header>

    <section>
      <nav>
        { categories.errormessage && <div>Error: {categories.errormessage}</div>}
        <ul>{ categories.data && renderCategories() }</ul>
      </nav>

      <main>
        
      </main>
    </section>
    
    <footer>
      Footer
    </footer>
    </>
  );
}

export default App;
