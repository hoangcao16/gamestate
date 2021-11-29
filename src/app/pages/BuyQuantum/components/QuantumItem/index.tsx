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
  background-color: linear-gradient(
    90deg,
    rgba(38, 39, 39, 1) 0%,
    rgba(108, 65, 157, 1) 55%,
    rgba(38, 39, 39, 1) 100%
  );

  border-radius: 42px;
  position: relative;

  background: linear-gradient(
      to right,
      rgba(38, 39, 39, 1) 20%,
      rgba(108, 65, 157, 1) 55%,
      rgba(38, 39, 39, 1) 80%
    ),
    linear-gradient(
      to bottom,
      rgba(38, 39, 39, 1) 20%,
      rgba(108, 65, 157, 1) 55%,
      rgba(38, 39, 39, 1) 80%
    ),
    linear-gradient(
      to left,
      rgba(38, 39, 39, 1) 20%,
      rgba(108, 65, 157, 1) 55%,
      rgba(38, 39, 39, 1) 80%
    ),
    linear-gradient(
      to top,
      rgba(38, 39, 39, 1) 20%,
      rgba(108, 65, 157, 1) 55%,
      rgba(38, 39, 39, 1) 80%
    );
  background-origin: border-box;
  background-size: 100% 40px, 40px 100%, 100% 40px, 40px 100%;
  background-position: top left, top right, bottom right, bottom left;
  background-repeat: no-repeat;
  &:after {
    content: '';
    position: absolute;
    inset: 40px;
    background: rgba(38, 39, 39, 1);
    z-index: -1;
  }
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
