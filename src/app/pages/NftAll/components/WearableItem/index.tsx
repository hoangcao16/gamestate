import React from 'react';
import styled from 'styled-components';
// import buyItem from 'app/assets/img/Order/quantum.png';
const WearableItem = props => {
  return (
    <StyledBuyItem>
      <StyledBuyItemBlack>
        <StyledBuyItemImage src={props.metadata.image} alt="" />
        <Span>
          #{props.items} {props.metadata.name}
        </Span>
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
  flex: 1;

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
export default WearableItem;
