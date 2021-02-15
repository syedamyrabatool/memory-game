import styled from "styled-components";
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  Game: styled.div`
    width: 100%;
    color: #24292e;
    display: flex;
    flex-wrap: wrap;
  `,

  Card: styled.div`

  `,
  ForeSide: styled.div`
    width: 12rem;
    height: 14rem;
    border: 1px solid #999;
    margin: 1rem;
    border-radius: 5px;
    background-color: pink;
    &:hover {
      border: 2px solid green;
      cursor: pointer;
    }
  `,
  BackSide: styled.div`
    width: 12rem;
    height: 14rem;
    border: 1px solid #999;
    margin: 1rem;
    border-radius: 5px;
    background-color: #86b0da;
  `,
  Text: styled.p`
    margin: 5rem 2rem;
  `,
}