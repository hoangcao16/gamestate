import React from 'react';
import styled from 'styled-components';
const StyledPrice = styled.div`
  border: 1px solid #ffffff;
  border-radius: 9px;
  font-size: 24px;
  line-height: 60px;
  font-weight: bold;
  width: 155px;
  text-align: center;
  color: #fff;
  margin-top: 24px;
  @media screen and (max-width: 575px) {
    line-height: 30px;
    font-size: 14px;
    border-radius: 2px;
  }
`;
const LabelPrice = ({ children }: any) => {
  return <StyledPrice>{children}</StyledPrice>;
};

export default LabelPrice;
