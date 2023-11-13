import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imagenLogoBazar from '../img/logoBazar.png';
import './Home.css';

export default function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/items?search=${query}`);
  };

  return (
    <div className="container">
      <div className="imagenLogoBazar">
        <img src={imagenLogoBazar} alt="imagenLogoBazar" />
      </div>
      <h2>Bazar Online</h2>
      <form className="form" onSubmit={handleSearch}>
        <input
          className="input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
}
