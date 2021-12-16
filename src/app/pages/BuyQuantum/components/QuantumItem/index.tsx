import React from 'react';
import styled from 'styled-components';
import buyItem from 'app/assets/img/BuyQuantum/quantumtest.png';
const StyledBuyItemImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 42px;
`;
const StyledBuyItemBlack = styled.div`
  background: #0a0c08;
  /* padding: 43px 54px; */
  @media screen and (max-width: 575px) {
    padding: 18px 36px;
    border-radius: 0;
  }
`;
export const StyledBuyItem = styled.div`
  max-width: 705px;
  padding: 40px;
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
    padding: 17px;
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
