// import ProductCard from '../components/ProductCard';

// function Results() {
//   const products = [
//     // sample data
//   ];

//   return (
//     <div className="grid">
//       {products.map(product => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }

// export default Results;
// SearchResults.js
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';  // Importa Axios
import './Resultados.css';

export default function Resultados() {

  const [results, setResults] = useState([]);
  const [searchParams] = useSearchParams();
  
  const searchAPI = 'http://www.examen2parcial.somee.com/api/items?query=';  // Utiliza HTTPS

  useEffect(() => {
    const query = searchParams.get('search');
    axios.get(searchAPI + query)  // Usa axios.get en lugar de fetch
      .then(response => setResults(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [searchParams]);

  return (
    <div className="grid">
    
      {results.map(item => (
      
        <div className="card" key={item.id}>
        
          <img src={item.thumbnail} className="card-img" />
          
          <div className="card-content">

            <h3 className="card-title">{item.title}</h3>
            <span className="card-category">{item.category}</span>

            <p className="card-desc">{item.description}</p>
            
            <div className="card-footer">
              <span className="card-price">${item.price}</span>
              <div className="card-rating">
                {/* {Array(item.rating).fill(<i>⭐</i>)}  */}
                {/* {Array(Math.max(0, item.rating)).fill(<i>⭐</i>)} */}
              </div>
            </div>

          </div>

        </div>
      
      ))}

    </div>
  );

}