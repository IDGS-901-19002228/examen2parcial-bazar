// import { useParams } from 'react-router-dom';

// function ProductDetail() {
//   const { id } = useParams();
//   const product = {}; // get product by id

//   return (
//     <div>
//       <h3>{product.title}</h3>
//       <img src={product.image} />
//       {/* other product details */}
//     </div>
//   );
// }

// export default ProductDetail;

// ItemDetails.js 

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function DetalleProducto() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  const itemAPI = 'http://www.Examen2Parcial.somee.com/api/items/';

  useEffect(() => {
    
    fetch(itemAPI + id)
      .then(res => res.json())
      .then(data => setItem(data));
  
  }, [id]);

  // renderizar detalle del item...

  return (
    <div>
      { item && (
        <>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </>
      )}
    </div>
  );
}