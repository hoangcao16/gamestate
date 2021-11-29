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
