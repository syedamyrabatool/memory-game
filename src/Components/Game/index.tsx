import React, { useState, useEffect } from 'react';
import propTypes from "prop-types";
import Card from '../Card';
import SC from '../styles.js';

type IGame = {
  cardCount: number
};

const shuffle = (input: number[]) => {
  for(let i=0; i < input.length -1; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = input[i];
    input[i] = input[j];
    input[j] = temp;
  }
  return input;
};

const generateCards = (matchCount: number): number[] => {
  const array: number[] = [];
  for(let i=1; i <= matchCount; i++) {
    let randomValue = i*25;
    array.push(randomValue);
    array.push(randomValue);
  }
  const outputValues: number[] = shuffle(array);
  console.log(outputValues);
  return outputValues;
};

const Game = ({ cardCount }: IGame) => {
  const cardCountEven = cardCount%2 === 0;
  const matchCount = cardCount/2;
  const [cards, setCards] = useState<null | number[]>([]);
  const [matchedCards, setMatchedCards] = useState<null | string[]>([]);
  const [cardOne, setCardOne] = useState('');
  const [cardTwo, setCardTwo] = useState('');
  const [compare, setCompare] = useState(false);
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    setCards(generateCards(matchCount));
    setMatchedCards([]);
  }, [matchCount, restart]);

  useEffect(() => {
    setTimeout(() => {
      if (cardOne === '' || cardTwo === '') {
        console.log('select card to start matching');
      } else {
        setCompare(true);
        if (cardOne !== cardTwo) {
          console.log('mismatch');
        } else {
          console.log('match');
          console.log(matchedCards);
          let mCard: string[] = matchedCards || [];
          mCard.push(cardOne);
          setMatchedCards(mCard);
        }
        setCardOne('');
        setCardTwo('');
        setCompare(false);
      }
    }, 300);
  }, [cardOne, cardTwo, matchedCards]);

  const handleFlip = (value: string) => {
    if (cardOne === '') {
      setCardOne(value);
    } else if (cardTwo === '') {
      setCardTwo(value);
    }
  };

  const createCard = (id: number, value: number) => {
    const isMatch: boolean = (
      matchedCards !== null
      && matchedCards.length > 0
      && (matchedCards.indexOf(value.toString()) >= 0)
    );
    return (
      <Card
        key={id}
        id={id}
        value={value.toString()}
        onFlip={handleFlip}
        isMatched={isMatch}
        isComparing={compare}
        resetCard={restart}
      />
    );
  };

  const startGame = () => {
    return cards && cards.map((mapVal, index) => {
      return createCard(index, mapVal);
    })
  };

  return (
     <>
       <SC.Game>
         {matchedCards && matchedCards.length === matchCount &&
           <SC.GameOver data-testid='end'>Game Over</SC.GameOver>
         }
         <SC.Button type='button' onClick={()=>setRestart(!restart)}>
           Restart
         </SC.Button>
         <SC.CardGrid>
           {cardCountEven && cardCount > 0
              ? startGame()
              : <SC.Text data-testId='count_error'>
                  Error: Please check count of cards.
                  <br /><b>Hint</b>
                  <br />Even number of Cards only
                  <br />Set Cards greater then Zero
                </SC.Text>
            }
         </SC.CardGrid>
       </SC.Game>
     </>
  );
};

Game.propTypes = {
  cardCount: propTypes.number,
};

export default Game;