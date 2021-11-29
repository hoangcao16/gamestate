import Header from 'app/components/Navbar';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Footer from '../Home/components/Footer';
import QuantumItem from './components';
import ButtonQuantum from './components/ButtonQuantum';
import LabelPrice from './components/LabelPrice';

const StyledMain = styled(Container)`
  margin-top: 90px;
`;
const StyledQuantumItem = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 705px;
  margin: 60px auto;
`;
const StyledTitle = styled.h3`
  font-size: 60px;
  font-weight: bold;
  line-height: 60px;
  letter-spacing: 0px;
  color: #ffffff;
`;
const StyledDesc = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.7;
  margin: 34px 0 55px;
`;
const StyledButton = styled.div`
  margin-top: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BuyQuantum = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Row>
          <StyledQuantumItem>
            <StyledTitle>Quantum Accelerator</StyledTitle>
            <StyledDesc>
              Experience enhancing NFT’s , Reward holders with airdrop
              opportunities, staking multipliers and early bird access!
            </StyledDesc>
            <QuantumItem />
            <LabelPrice>250 USDC</LabelPrice>
            <StyledButton>
              <ButtonQuantum minWidth={100}>BUY NOW</ButtonQuantum>
            </StyledButton>
          </StyledQuantumItem>
        </Row>
      </StyledMain>
      <Footer />
    </>
  );
};

export default BuyQuantum;
