import styled from "styled-components";
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  Game: styled.div`
    margin: 4rem 6rem;
    color: #24292e;
    display: flex;
    flex-wrap: wrap;
  `,

  Card: styled.div`

  `,
  ForeSide: styled.div`
    width: 12rem;
    height: 14rem;
    border: 2px solid #999;
    margin: 2rem;
    border-radius: 5px;
    background-color: pink;
    &:hover {
      border: 2px solid green;
      cursor: pointer;
    }
    @media only screen and (max-width: 415px) {
      width: 6rem;
      height: 7rem;
      margin: 0.25rem;
    }

  `,
  BackSide: styled.div`
    width: 12rem;
    height: 14rem;
    border: 2px solid #999;
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
    margin: 6rem 0;
    text-align:center;
    @media only screen and (max-width: 415px) {
      margin: 3rem 0;
    }
  `,
  GameOver: styled.p`
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin: 6rem 0;
    text-align:center;
  `,
}