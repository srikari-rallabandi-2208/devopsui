import React, { useEffect, useState } from 'react';

const App = () => {
  const [psResults, setPsResults] = useState([]);
  const [topResults, setTopResults] = useState([]);

  useEffect(() => {
    // Fetch ps_results API
    fetch('https://localhost:8080/api/ps_results')
      .then(response => response.json())
      .then(data => setPsResults(data));

    // Fetch top_results API
    fetch('https://localhost:8080/api/top_results')
      .then(response => response.json())
      .then(data => setTopResults(data));
  }, []);

  return (
    <div>
      <h1>PS Results</h1>
      <ul>
        {psResults.map(psResult => (
          <li key={psResult.id}>{psResult.name}</li>
        ))}
      </ul>

      <h1>Top Results</h1>
      <ul>
        {topResults.map(topResult => (
          <li key={topResult.id}>{topResult.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;