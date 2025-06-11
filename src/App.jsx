import { useEffect, useState } from 'react';
import Country from './components/country';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/countries');
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        console.error('Kļūda ielādējot valstis:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
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
              <Country key={country.id} {...country} />
            ))}
          </div>
        )}
      </main>

      <footer className="footer">© 2025 geoData</footer>
    </div>
  );
}

export default App;
