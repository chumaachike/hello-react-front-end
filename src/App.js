import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  let renderedItem = '';
  const [greeting, setGreeting] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/');
      setGreeting(result.data.message);
    };

   fetchData();
  }, []);
  if (greeting === undefined || greeting.length === 0) {
    renderedItem = (
      <p>
        Loading..
      </p>
    );
  } else {
    renderedItem = greeting
  }
  return (
    <div className="App">
     <h1>{renderedItem}</h1>
    </div>
  );
}

export default App;
