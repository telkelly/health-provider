import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      url: 'https://symptom-checker4.p.rapidapi.com/analyze',
      params: {
        symptoms: symptoms
      },
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '3bc4205b95msh053da429b4479cdp13dcd3jsn57e065230884',
        'X-RapidAPI-Host': 'symptom-checker4.p.rapidapi.com'
      },
      data: {
        symptoms: symptoms
      }
    };

    try {
      const response = await axios.request(options);
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Symptom Checker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your symptoms:
          <input
            type="text"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {result && result.potentialCauses && (
        <div>
          <h2>Analysis Result:</h2>
          <ul>
            {result.potentialCauses.map((cause, index) => (
              <li key={index}>{cause}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;