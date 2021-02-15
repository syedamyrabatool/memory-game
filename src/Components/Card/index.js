import React, { useState, useEffect } from 'react';
import propTypes from "prop-types";
import SC from '../styles.js';

const ForeSide = ({ show }) => {
  return (
    <>{show && <SC.ForeSide><SC.Text data-testid='clickMe'>Click To Flip</SC.Text></SC.ForeSide>}</>
  );
};
const BackSide = ({ show, value }) => {
  return (
     <>{show && <SC.BackSide><SC.Text data-testid='flipSide'>{value}</SC.Text></SC.BackSide>}</>
  );
};

const Card = (props) => {
  const { id, side, value, isMatched, isComparing, onFlip } = props;
  const [flip, setFlip] = useState(side);

  useEffect(() => {
    setFlip(!isMatched ? 'fore' : 'back');
  }, [isMatched, isComparing]);

  const flipCard = (id, value) => {
    if(!isMatched) {
      setFlip('back');
      onFlip(id, value);
    }
  };
  return (
    <>
      <SC.Card
        data-testid={`card_${id}`}
         id={id} onClick={()=> {flipCard(id, value)}}
      >
        <ForeSide show={!isMatched && flip==='fore'}></ForeSide>
        <BackSide show={flip==='back'} value={value}></BackSide>
      </SC.Card>
    </>
  );
};

Card.propTypes = {
  id: propTypes.number,
  side: propTypes.string,
  value: propTypes.number,
  isMatched: propTypes.bool,
  isComparing: propTypes.bool,
  onFlip: propTypes.func,
};
export default Card;