import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button<{ width: number }>`
  min-width: ${props => props.width}%;
  font-size: 20px;
  font-weight: bold;
  line-height: 70px;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  background: #262626;
  outline: none;
  border: none;
  border-radius: 3px;
  position: relative;
  @media screen and (max-width: 575px) {
    min-width: 98%;
    line-height: 54px;
    font-size: 18px;
  }

  &:before {
    content: '';
    position: absolute;
    inset: -4px;
    background: linear-gradient(to left, #e740f0, #8f65be, #254492);
    z-index: -1;
    border-radius: 4px;
    padding: 4px;
  }
  &:after {
    content: '';
    inset: 0;
    position: absolute;
    background: transparent
      linear-gradient(96deg, #163f8c 0%, #8f65be 48%, #e740f0 100%) 0% 0%
      no-repeat padding-box;
    border-radius: 4px;
    opacity: 0.9;
    filter: blur(15px);
    z-index: -1;
  }
`;
const ButtonQuantum = ({ onclick, minWidth, children }) => {
  return (
    <StyledButton onClick={onclick} width={minWidth}>
      {children}
    </StyledButton>
  );
};

export default ButtonQuantum;
