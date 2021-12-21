import React from 'react';
import styled from 'styled-components';
// import buyItem from 'app/assets/img/Order/quantum.png';
import Filter1 from '../../assets/img/1.png';
import Filter2 from '../../assets/img/2.png';
import Filter3 from '../../assets/img/3.png';
import Filter4 from '../../assets/img/4.png';
import Filter5 from '../../assets/img/5.png';
import Filter6 from '../../assets/img/6.png';
import Filter7 from '../../assets/img/7.png';
import Filter8 from '../../assets/img/8.png';
import Filter9 from '../../assets/img/9.png';
import Filter10 from '../../assets/img/10.png';
import Filter11 from '../../assets/img/11.png';
import Filter12 from '../../assets/img/12.png';
import Filter13 from '../../assets/img/13.png';
import Filter14 from '../../assets/img/14.png';
import Filter15 from '../../assets/img/15.png';
import Filter16 from '../../assets/img/16.png';
import Filter17 from '../../assets/img/17.png';
import Filter18 from '../../assets/img/18.png';
import Filter19 from '../../assets/img/19.png';
import Filter20 from '../../assets/img/20.png';
import Filter21 from '../../assets/img/21.png';
import Filter22 from '../../assets/img/22.png';
const QuantumItem = props => {
  const data = [
    Filter1,
    Filter2,
    Filter3,
    Filter4,
    Filter5,
    Filter6,
    Filter7,
    Filter8,
    Filter9,
    Filter10,
    Filter11,
    Filter12,
    Filter13,
    Filter14,
    Filter15,
    Filter16,
    Filter17,
    Filter18,
    Filter19,
    Filter20,
    Filter21,
    Filter22,
  ];
  const random = Math.floor(Math.random() * 22);
  console.log(random);
  return (
    <StyledBuyItem>
      <StyledBuyItemBlack>
        <StyledBuyItemImage src={data[random]} alt="" />
        <Span>#{props.items} Quantum Accelerator</Span>
      </StyledBuyItemBlack>
    </StyledBuyItem>
  );
};
const StyledBuyItemImage = styled.img`
  width: 100%;
  height: 100%;
  z-index: 2;
  border-radius: 8px;
  background-color: #000;
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
export default QuantumItem;
