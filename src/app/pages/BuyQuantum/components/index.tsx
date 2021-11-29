import React from 'react';
import styled from 'styled-components';
import buyItem from 'app/assets/img/BuyQuantum/quantum.png';
const StyledBuyItemImage = styled.img`
  width: 100%;
  height: 100%;
`;
const StyledBuyItemBlack = styled.div`
  background: #0a0c08;
  padding: 43px 54px;
  border-radius: 42px;
  @media screen and (max-width: 575px) {
    padding: 18px 36px;
    border-radius: 0;
  }
`;
const StyledBuyItem = styled.div`
  max-width: 705px;
  padding: 40px;
  background: linear-gradient(
      90deg,
      rgba(38, 39, 39, 1) 0%,
      rgba(108, 65, 157, 1) 55%,
      rgba(38, 39, 39, 1) 100%
    ),
    linear-gradient(
      0deg,
      rgba(38, 39, 39, 1) 0%,
      rgba(108, 65, 157, 1) 55%,
      rgba(38, 39, 39, 1) 100%
    );
  border-radius: 42px;
  position: relative;
  /* padding: 17px;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    max-width: 673px;
    height: 100%;
    max-height: 700px;
    left: 0px;
    bottom: 0px;
    border-radius: 50%;
    -webkit-filter: blur(50px);
    filter: blur(50px);
    background: linear-gradient(to right, #163f8c, #9e08a6);
    z-index: -1;
  } */
  @media screen and (max-width: 575px) {
    max-width: 322px;
    padding: 17px;
    border-radius: 0;
  }
`;
const QuantumItem = () => {
  return (
    <StyledBuyItem>
      <StyledBuyItemBlack>
        <StyledBuyItemImage src={buyItem} alt="" />
      </StyledBuyItemBlack>
    </StyledBuyItem>
  );
};

export default QuantumItem;
