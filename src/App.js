import React,{useState} from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const[cards, setCards] = useState([1, 2, 3, 4]);
  return (
    <div className='app'>
      <div className='cards-container'>
        {
          cards.map((card) =>(
            <Card />
          ))
        }
      </div>
    </div>
  );
}

export default App;
