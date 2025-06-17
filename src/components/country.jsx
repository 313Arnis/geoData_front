import './Country.css';

function Country({ name, area_km2, population, cities = [] }) {
  const enhancedCities = [
    ...cities,
    { id: 999999, name: 'Galvaspilsēta' } // piem. automātiska papildināšana
  ];

  return (
    <div className="country-card">
      <h2>{name}</h2>
      <p>📏 {area_km2} km²</p>
      <p>👥 {population.toLocaleString()} iedzīvotāji</p>

      {enhancedCities.length > 0 && (
        <ul className="country-cities">
          {enhancedCities.map((city) => (
            <li key={city.id}>🏙️ {city.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Country;
