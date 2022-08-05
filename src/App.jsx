import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {


    const [mama, setMama] = useState([]);

    useEffect(() => {

        axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
        .then(res => setMama(res.data.jokes));

    }, []); 

    return (
      <div className="App">
        <header className="App-header">
          <h1>Mama jokes</h1>
            <ul>
                {
                    mama.map(j => <li style={{color: 'aqua'}} key={j.id}>{j.joke}</li>)
                }
            </ul>
            <ul>
              {
                 mama.map(j => <li style={{color: 'red'}} key={j.id}>{j.setup} <span style={{color: 'yellow'}}>{j.delivery}</span></li>)
              }
            </ul>
          </header>
    </div>
  );
}

export default App;