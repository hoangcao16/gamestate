import React from 'react';
import styled from 'styled-components';
import buyItem from 'app/assets/img/BuyQuantum/quantumtest.png';
const StyledBuyItemImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 35px;
  @media screen and (max-width: 575px) {
    border-radius: 0;
  }
`;
export const StyledBuyItemBlack = styled.div`
  /* padding: 43px 54px; */
  height: 100%;
  @media screen and (max-width: 575px) {
    background: #0a0c08;
    /* padding: 18px 36px; */
    border-radius: 0;
  }
`;
export const StyledBuyItem = styled.div`
  max-width: 400px;
  padding: 20px 24px;
  background-color: #262727;
  border-radius: 42px;
  position: relative;
  z-index: 2;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    filter: blur(50px);
    background: linear-gradient(
      to bottom,
      rgba(108, 65, 157, 1),
      rgba(108, 65, 157, 1)
    );
    z-index: -1;
  }

  @media screen and (max-width: 575px) {
    max-width: 322px;
    padding: 20px 23px;
    border-radius: 0;
    margin: 0 auto;
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
