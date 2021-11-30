import React from 'react';
import styled from 'styled-components';
import buyItem from 'app/assets/img/BuyQuantum/quantum.png';

const QuantumItem = () => {
  return (
    <StyledBuyItem>
      <StyledBuyItemBlack>
        <StyledBuyItemImage src={buyItem} alt="" />
      </StyledBuyItemBlack>
    </StyledBuyItem>
  );
};
const StyledBuyItemImage = styled.img`
  width: 100%;
  height: 100%;
  z-index: 2;
  border-radius: 8px;
`;
const StyledBuyItem = styled.div`
  border-radius: 8px;
  background-color: #555555;
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
    background: linear-gradient(to bottom, #163f8c, #9e08a6);
    z-index: -1;
  }
`;
const StyledBuyItemBlack = styled.div`
  z-index: 2;
  padding: 16px;
  border-radius: 8px;
`;
export default QuantumItem;
