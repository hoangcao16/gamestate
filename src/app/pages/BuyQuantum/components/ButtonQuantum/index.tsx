import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button<{
  disabled?: any;
  margin?: string;
}>`
  font-size: 20px;
  flex: 1;
  font-weight: bold;
  line-height: 70px;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  cursor: ${props => (props.disabled === 1 ? 'no-drop' : 'pointer')};
  background: ${props =>
    props.disabled === 1 ? '#888888' : 'rgb(38, 38, 38)'};
  outline: none;
  border: none;
  border-radius: 3px;
  position: relative;
  margin: ${props => props.margin};

  @media screen and (max-width: 575px) {
    line-height: 54px;
    font-size: 18px;
    margin: 20px 20px;
  }
  &:hover:not([disabled]) {
    background: rgba(38, 38, 38, 0.9);
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
    opacity: 1;
    filter: blur(15px);
    z-index: -1;
  }
`;
const ButtonQuantum = ({
  onclick,
  margin,
  disable,
  children,
}: {
  onclick?: () => void;
  margin?: string;
  disable?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <StyledButton onClick={onclick} margin={margin} disabled={disable ? 1 : 0}>
      {children}
    </StyledButton>
  );
};

export default ButtonQuantum;
