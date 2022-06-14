import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]); // where to store the returned data
  const [error, setError] = useState(null);
  // where to store the coming errors
  useEffect(() => {
    function fetchData() {
      // the function to fetch data from the api
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setData(res.data))
        .catch(error => setError(error))
      console.log(error)
    }

    fetchData();
  }, []);

  return (
      
    <div className='App'>
      {data.map((item) => (
        <div className='user-card' key={item.id}>
          <h1>{item.name}<span>'{item.username}'</span></h1>
          <p><label>email: </label>{item.email}</p>
          <p><label>adress: </label>{item.address.street},{item.address.city}</p>

        </div>
      ))}
    </div>
  );

}
export default App;
