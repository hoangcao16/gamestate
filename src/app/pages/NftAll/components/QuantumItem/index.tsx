import { CircularProgress } from '@mui/material';
import { history } from 'app';
import React from 'react';
import styled from 'styled-components';
// import buyItem from 'app/assets/img/Order/quantum.png';

const QuantumItem = props => {
  const { image, items } = props;
  return (
    <StyledBuyItem>
      <StyledBuyItemBlack>
        {image ? (
          <StyledBuyItemImage
            onClick={() => history.push(`/nft/utility/${items}`)}
            src={image}
            alt=""
          />
        ) : (
          <StyleLoading className="d-flex justify-content-center align-items-center">
            <CircularProgress />
          </StyleLoading>
        )}

        <Span>#{items} Quantum Accelerator</Span>
      </StyledBuyItemBlack>
    </StyledBuyItem>
  );
};
const StyleLoading = styled.div`
  height: 145.77px;
`;
const StyledBuyItemImage = styled.img`
  cursor: pointer;
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
export default QuantumItem;
