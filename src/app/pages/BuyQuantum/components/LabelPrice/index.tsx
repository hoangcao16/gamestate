import React from 'react';
import styled from 'styled-components';
const StyledPrice = styled.div`
  border: 1px solid #ffffff;
  border-radius: 9px;
  font-size: 24px;
  line-height: 60px;
  font-weight: bold;
  min-width: 234px;
  text-align: center;
  color: #fff;
  margin-top: 24px;
  @media screen and (max-width: 575px) {
    min-width: 153px;
    line-height: 30px;
    font-size: 14px;
    border-radius: 2px;
    margin-bottom: 24px;
  }
`;
const LabelPrice = ({ children }: any) => {
  return <StyledPrice>{children}</StyledPrice>;
};

export default LabelPrice;
