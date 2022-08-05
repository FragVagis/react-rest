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
                    mama.map(j => <li key={j.id}>{j.name} {j.mama.joke}</li>)
                }
            </ul>
          </header>
    </div>
  );
}

export default App;