import styled from "styled-components";
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  Game: styled.div`
    margin: 4rem 6rem;
    color: #24292e;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  `,
   CardGrid: styled.div`
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: center;
   `,
  Card: styled.div``,
  ForeSide: styled.div`
    width: 12rem;
    height: 14rem;
    margin: 2rem;
    background-color: pink;

    @media only screen and (max-width: 415px) {
      width: 6rem;
      height: 7rem;
      margin: 0.25rem;
    }
  `,
  Image: styled.img`
    height: 14rem;
    width: 12rem;
    &:hover {
      cursor: pointer;
    }
    @media only screen and (max-width: 415px) {
      width: 6rem;
      height: 7rem;
    }
  `,

  BackSide: styled.div`
    width: 12rem;
    height: 14rem;
    margin: 2rem;
    border-radius: 5px;
    background-color: #86b0da;
    &:hover {
      cursor: not-allowed;
    }
    @media only screen and (max-width: 415px) {
      width: 6rem;
      height: 7rem;
      margin: 0.25rem;
    }
  `,

  Text: styled.p`
    font-size: 14px;
    padding: 6rem 0;
    text-align:center;
    @media only screen and (max-width: 415px) {
      padding: 0;
      margin: 0;
    }

    &.card-title {
      font-size: 20px;
    }
  `,
  GameOver: styled.p`
    display: block;
    color: green;
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    text-align:center;
  `,

  Button: styled.button`
    margin: 1rem;
    width: auto;
  `,
}