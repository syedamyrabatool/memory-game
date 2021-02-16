import React from 'react';
import propTypes from "prop-types";
import SC from '../styles.js';

type IBack = {
  show: boolean;
  value: string;
}

const BackSide = ({ show, value }: IBack) => {
  return (
     <>
       {show &&
         <SC.BackSide>
           <SC.Text className='card-title' data-testid='flipSide'>
             {value}
           </SC.Text>
         </SC.BackSide>
       }
     </>
  );
};


BackSide.propTypes = {
  show: propTypes.bool,
  value: propTypes.string,
};
export default BackSide;