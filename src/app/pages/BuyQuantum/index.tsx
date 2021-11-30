import Header from 'app/components/Navbar';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Footer from '../Home/components/Footer';
import QuantumItem from './components/QuantumItem';
import ButtonQuantum from './components/ButtonQuantum';
import LabelPrice from './components/LabelPrice';
import ModalConnectWallet from 'app/components/ModalConnect';
import { useSelector } from 'react-redux';
import { walletAction } from 'store/globalReducer';
import ApproveButton from './components/ApproveButton';
import Web3 from 'services/walletService/initWeb3';

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
  text-align: center;
  @media screen and (max-width: 575px) {
    max-width: unset;
  }
`;
const StyledTitle = styled.h3`
  font-size: 60px;
  font-weight: bold;
  line-height: 60px;
  letter-spacing: 0px;
  color: #ffffff;
  @media screen and (max-width: 575px) {
    font-size: 24px;
    font-weight: bold;
    line-height: 60px;
  }
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
  @media screen and (max-width: 575px) {
    font-size: 14px;
    font-weight: bold;
    line-height: 24px;
    margin-top: 0px;
  }
`;
const StyledButton = styled.div`
  margin-top: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledGroupButton = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 575px) {
    flex-wrap: wrap;
  }
`;
const BuyQuantum = () => {
  // const intanceValue = Web3.getInstance;

  // const [allow, setAllow] = useState(false);
  // //set up allow
  // const handleAction = data => {
  //   setAllow(data);
  // };
  // const curAddress = JSON.parse(
  //   localStorage.getItem('StoreWallet')!,
  // )?.currentAddress;
  // const tokenSymbol = 'USDC';
  // const toAddress = '0xdd9185db084f5c4fff3b4f70e7ba62123b812226';
  // const amount = '1000';

  const [openConnect, setOpenConnect] = useState(false);
  const storeWallet = JSON.parse(
    localStorage.getItem('StoreWallet')!,
  )?.currentAddress;
  useEffect(() => {
    storeWallet ? setOpenConnect(false) : setOpenConnect(true);
  }, []);

  const handleOpenConnect = () => {
    setOpenConnect(true);
  };
  const handleCloseConnect = () => {
    setOpenConnect(false);
  };

  const handleClose = () => {};
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
            {!storeWallet ? (
              <StyledButton>
                <ButtonQuantum
                  minWidth={100}
                  onclick={() => handleOpenConnect()}
                >
                  BUY NOW
                </ButtonQuantum>
              </StyledButton>
            ) : (
              <StyledGroupButton>
                <StyledButton>
                  <ButtonQuantum minWidth={90} onclick={console.log('approve')}>
                    APPROVE
                  </ButtonQuantum>
                </StyledButton>
                <StyledButton>
                  <ButtonQuantum minWidth={90} onclick={console.log('buy')}>
                    BUY
                  </ButtonQuantum>
                </StyledButton>
              </StyledGroupButton>
            )}
          </StyledQuantumItem>
        </Row>
        <ModalConnectWallet
          onClose={handleCloseConnect}
          isOpen={openConnect}
          handle={handleClose}
          // isOpenModal={isOpenModal}
        />
        {/* <ApproveButton
          curAddress={curAddress}
          tokenSymbol={tokenSymbol}
          toAddress={toAddress}
          amount={amount}
          handleAction={handleAction}
        /> */}
      </StyledMain>
      {/* <Footer /> */}
    </>
  );
};

export default BuyQuantum;
