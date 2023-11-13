// // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import Home from './pages/Home';
// // import Results from './pages/Results';
// // import ProductDetail from './pages/ProductDetail';

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/results" element={<Results />} />  
// //         <Route path="/product/:id" element={<ProductDetail />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;
// // import { useState, useEffect, useCallback } from 'react';
// import imagenLogoBazar from './img/logoBazar.png';
// import './App.css';
// // import Characters from './components/Characters';
// import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "/node_modules/bootstrap/dist/js/bootstrap.min.js";

// function App() {
//   //const [characters, setCharacters] = useState(null);
//   // const [page, setPage] = useState(1);

//   // const cargarCharacters = useCallback(async () => {
//   //   setPage(page + 1);
//   //   const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page + 1}`;
//   //   const api = await fetch(apiUrl);
//   //   const charactersApi = await api.json();
//   //   setCharacters(charactersApi.results);
//   // }, [page]);

//   // const cargarCharactersAnterior = useCallback(async () => {
//   //   if (page > 1) {
//   //     setPage(page - 1);
//   //     const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page - 1}`;
//   //     const api = await fetch(apiUrl);
//   //     const charactersApi = await api.json();
//   //     setCharacters(charactersApi.results);
//   //   }
//   // }, [page]);

//   // const regApi = useCallback(async () => {
//   //   const api = await fetch('https://rickandmortyapi.com/api/character');
//   //   const charactersApi = await api.json();
//   //   setCharacters(charactersApi.results);
//   // }, []);

//   // useEffect(() => {
//   //   regApi();
//   // }, [regApi]);

//   return (
//     <div className='App'>
//       <header className='App-header'>
//       <img src={imagenLogoBazar} alt='Rick & Morty' className='img-home' /><br />
//         {/* <h1 className='title'>Rick & Morty</h1> */}
        
//           <>
//             <h1 className='title'>Rick & Morty</h1>
//             <div className="search-bar">
//               <input
//                 type="text"
//                 placeholder="Buscar por nombre"
//                 // value={searchInput}
//                 // onChange={handleSearchChange}
//               />
//             </div>
//             <button className='btn btn-success btn-search'>Buscar Personajes</button>
//           </>
        
//       </header>
//     </div>
//   );
// }

// export default App;

// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resultados from './pages/Resultados';
import DetalleProducto from './pages/DetalleProducto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Resultados />} />  
        <Route path="/items/:id" element={<DetalleProducto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;