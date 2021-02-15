import React, { useState, useEffect } from 'react';
import propTypes from "prop-types";
import Card from '../Card';
import SC from '../styles.js';
const Game = (props) => {
  const { cardCount } = props;
  const cardCountEven = cardCount%2 === 0;
  const matchCount = cardCount/2;
  const side = 'fore';
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);
  const [compare, setCompare] = useState(false);
  const shuffle = (input) => {
    for(let i=0; i < input.length -1; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = input[i];
      input[i] = input[j];
      input[j] = temp;
    }
    return input;
  };
  const generateValues = () => {
    const array = [];
    for(let i=1; i <= matchCount; i++) {
      let randomValue = i*25;
      array.push(randomValue);
      array.push(randomValue);
    }
    const outputValues = shuffle(array);
    return outputValues;
  };

  const [cardsDeck, setCardsDeck] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  useEffect(() => {
    setCardsDeck(generateValues());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (cardOne === null || cardTwo === null) {
        console.log('select card to start matching');
      } else {
        setCompare(true);
        if (cardOne !== cardTwo) {
          console.log('mismatch');
        } else {
          console.log('match');
          setMatchedCards(prevArray => [...prevArray, cardOne]);
        }
        setCardOne(null);
        setCardTwo(null);
        setCompare(false);
      }
    }, 300);
  }, [cardOne, cardTwo]);

  const handleFlip = (id, value) => {
    if (cardOne === null) {
      setCardOne(value);
    } else if (cardTwo === null) {
      setCardTwo(value);
    }
  };

  const createCard = (id, value) => {
    return (
      <Card
        key={id}
        id={id}
        value={value}
        side={side}
        isComparing={compare}
        isMatched={matchedCards && matchedCards.length > 0 && matchedCards.indexOf(value) >= 0}
        onFlip={handleFlip}
      />
    );
  };

  const startGame = (count) => {
    const cards = [];
    for(let i=0; i< count; i++){
      cards.push(createCard(i, cardsDeck[i]));
    }
    return cards;
  };
  return (
     <>
       <SC.Game>
         {cardCountEven
           ? startGame(cardCount)
           : <SC.Text data-testId='count_error'>Error: Please check count of cards</SC.Text>}
         {matchedCards && matchedCards.length === matchCount &&
            <SC.Text data-testid='end'>Game Over</SC.Text>
         }
       </SC.Game>
     </>
  );
};

Game.propTypes = {
  cardCount: propTypes.number,
};

export default Game;