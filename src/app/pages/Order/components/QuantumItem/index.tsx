import React from 'react';
import styled from 'styled-components';
import buyItem from 'app/assets/img/Order/quantum.png';

const QuantumItem = props => {
  return (
    <StyledBuyItem>
      <StyledBuyItemBlack>
        <StyledBuyItemImage
          src={buyItem}
          alt=""
          randomHue={Math.floor(Math.random() * (90 - -90 + 1) - 90)}
          randomInvert={Math.floor(Math.random() * (5 - 1 + 1) + 1)}
          randomSaturate={Math.floor(Math.random() * (5 - 1 + 1) + 1)}
          randomGray={Math.floor(Math.random() * (10 - 0 + 1) + 0)}
        />
        <Span>#{props.items} Quantum Accelerator</Span>
      </StyledBuyItemBlack>
    </StyledBuyItem>
  );
};
const StyledBuyItemImage = styled.img<{
  randomHue: number;
  randomInvert: number;
  randomGray: number;
  randomSaturate: number;
}>`
  width: 100%;
  height: 100%;
  z-index: 2;
  border-radius: 8px;
  filter: hue-rotate(${props => props.randomHue}deg)
    invert(${props => (props.randomInvert === 1 ? 80 : 0)}%)
    saturate(${props => props.randomSaturate})
    grayscale(${props => props.randomGray}%);
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
  padding: 20px 20px 8px 20px;
  border-radius: 8px;
`;
const Span = styled.span`
  font-size: 14px;
  color: #ffffff;
  @media screen and (max-width: 459px) {
    font-size: 10px;
  }
  @media screen and (max-width: 402px) {
    font-size: 8px;
  }
`;
export default QuantumItem;
