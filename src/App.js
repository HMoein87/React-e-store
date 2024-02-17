import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/categories")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setResult(data);
    })
  }, [])
  return (
    <>
    <header>My Store</header>

    <section>
      <nav>
        {
          result.map(d => (
            <div key={d.id}>{d.title}</div>
          ))
        }
      </nav>

      <article>
        main area
      </article>
    </section>
    
    <footer>
      Footer
    </footer>
    </>
  );
}

export default App;
