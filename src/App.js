import { fireEvent } from '@testing-library/react';
import React,{useState, useEffect} from 'react';
import './App.css';
import Card from './components/Card';
import { images } from './import';

function App() {
  const[cards, setCards] = useState([]);
  const[firstCard,setFirstCard] = useState({});
  const[secondCard,setSecondCard] = useState({});

  const[unflippedCards,  setUnflippedCards] = useState([]);
  const[disabledCards,  setDisabledCards] = useState([]);

  const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  useEffect(()=>{
    shuffle(images);
    setCards(images);
  },[])

  useEffect(() =>{
    checkMatch();
  }, [secondCard])

  const flipCard = (content, number) =>{
    if(firstCard.content === content && firstCard.number === number){
      return 0;
    }
    if(!firstCard.content){
      setFirstCard({content,number});
    }else if(!secondCard.content){
      setSecondCard({content,number});
    }
    return 1
  }

  const checkMatch = () =>{
    if(firstCard.content && secondCard.content){
      const match = firstCard.content === secondCard.content;
      match ? disableCards() : unflipCards();
    } 
  }

  const disableCards = () =>{
    setDisabledCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const unflipCards = () =>{
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({});
  }
  
  return (
    <div className='app'>
      <div className='cards-container'>
        {
          cards.map((card, index) =>(
            <Card content={card.content} 
            number={index}
            frontFace={card.src} 
            flipCard={flipCard}
            unflippedCards={unflippedCards}
            disabledCards={disabledCards}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
