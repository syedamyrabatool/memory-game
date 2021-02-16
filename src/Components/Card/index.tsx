import React, { ReactElement, useState, useEffect } from 'react';
import propTypes from "prop-types";
import ForeSide from './ForeSide';
import BackSide from './BackSide';
import SC from '../styles.js';

type ICard = {
  id: number;
  value: string;
  isMatched?: boolean;
  isComparing: boolean;
  resetCard: boolean;
  onFlip: (arg0: string) => void;
};

const Card = (props: ICard):ReactElement =>  {
  const { id, value, isMatched, resetCard, isComparing, onFlip } = props;
  const [flip, setFlip] = useState('fore');

  useEffect(() => {
    setFlip('fore');
  }, [resetCard]);

  useEffect(() => {
    setFlip(!isMatched ? 'fore' : 'back');
  }, [isMatched, isComparing]);

  const flipCard = (value: string) => {
    if(!isMatched) {
      setFlip('back');
      onFlip(value);
    }
  };
  return (
    <>
      <SC.Card
        data-testid={`card_${id}`}
         id={id} onClick={()=> {flipCard(value)}}
      >
        <ForeSide show={!isMatched && flip==='fore'}></ForeSide>
        <BackSide show={flip==='back'} value={value}></BackSide>
      </SC.Card>
    </>
  );
};

Card.propTypes = {
  id: propTypes.number,
  value: propTypes.string,
  isMatched: propTypes.bool,
  isComparing: propTypes.bool,
  onFlip: propTypes.func,
  resetCard: propTypes.bool,
};
export default Card;