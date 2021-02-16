import React from 'react';
import propTypes from "prop-types";
import flipSide from '../../assets/img/flipSide.png';
import SC from '../styles.js';

type IFore = {
  show: boolean;
};

const ForeSide = ({ show }: IFore) => {
  return (
    <>
      {show &&
        <SC.ForeSide>
          <SC.Image
            data-testid='clickMe'
            title='click to flip'
            alt='Click to flip'
            src={flipSide}
          />
        </SC.ForeSide>
      }
    </>
  );
};


ForeSide.propTypes = {
  id: propTypes.number,
};
export default ForeSide;