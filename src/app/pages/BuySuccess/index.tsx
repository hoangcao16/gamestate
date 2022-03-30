import Button from '@mui/material/Button';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { history } from 'app';

BuySuccess.propTypes = {};

function BuySuccess(props) {
  return (
    <Main>
      <Container>
        <Row className="justify-content-center">
          <P>Your order is now complete! Thank you for your purchase.</P>
        </Row>
        <Row
          className="justify-content-center"
          style={{ marginBottom: '25px' }}
        >
          Please click below to view your NFT.
        </Row>
        <Button variant="contained" onClick={() => history.push('/nft-all')}>
          View wallet
        </Button>
      </Container>
    </Main>
  );
}

export default BuySuccess;

const Main = styled(Container)`
  color: #ffffff;
  padding-top: 160px;
  margin: 0 auto;
  text-align: center;
  max-width: 94%;
  @media (max-width: 564px) {
    padding-top: 90px;
  }
`;
const P = styled.p`
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  font-size: 35px;
  line-height: 60px;
  font-weight: bold;
  margin-bottom: 90px;
  @media screen and (max-width: 991px) {
    font-size: 40px;
  }
  @media screen and (max-width: 764px) {
    font-size: 30px;
  }
  @media screen and (max-width: 564px) {
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 50px;
  }
`;
