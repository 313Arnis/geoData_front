import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/countries')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('API kļūda:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <header className="navbar">
        <h1>🌍 geoData Explorer</h1>
      </header>

      <main className="content">
        {loading ? (
          <p className="loading">Notiek ielāde...</p>
        ) : (
          <div className="card-list">
            {countries.map((country) => (
              <div className="card" key={country.id}>
                <h2>{country.name}</h2>
                <p>📏 {country.area_km2} km²</p>
                <p>👥 {country.population.toLocaleString()} iedzīvotāji</p>
                {country.cities?.length > 0 && (
                  <ul className="cities">
                    {country.cities.map((city) => (
                      <li key={city.id}>🏙️ {city.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="footer">© 2025 geoData</footer>
    </div>
  );
}

export default App;
