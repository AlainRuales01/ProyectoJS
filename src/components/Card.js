import React, {useEffect, useState} from "react";
import ReactCardFlip from "react-card-flip"; //Librería instalada con npm i react-card-flip utilizada para hacer la animación de giro
import back_card from '../images/back_card.jpg'

const Card = ({ content, number, frontFace, flipCard, unflippedCards, disabledCards }) =>{
    const [isFlipped, setIsFlipped] = useState(false);
    const [hasEvent,setHasEvent] = useState(true);

    useEffect(() =>{
        if(unflippedCards.includes(number)){
            setTimeout(()=> setIsFlipped(false),700);
        }
    }, [unflippedCards])

    useEffect(() =>{
        if(disabledCards.includes(number)){
            setHasEvent(false);
        }
    }, [disabledCards])

    const click = e =>{
        const valor = flipCard(content,number);
        if(valor!== 0){
            setIsFlipped(!isFlipped);
        }
    }

    return(
        <div className="card">
            <ReactCardFlip isFlipped={isFlipped}>
                <img className="card-image" src={back_card} alt="back" onClick={hasEvent ? click: null}/>
                <img className="card-image" src={frontFace} alt="front-face" onClick={hasEvent ? click: null}/>
            </ReactCardFlip>
        </div>
    )
}

export default Card