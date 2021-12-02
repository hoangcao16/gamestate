import Header from 'app/components/Navbar';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
// import Footer from '../Home/components/Footer';
import QuantumItem from './components/QuantumItem';
import ButtonQuantum from './components/ButtonQuantum';
import LabelPrice from './components/LabelPrice';
import ModalConnectWallet from 'app/components/ModalConnect';
// import { useSelector } from 'react-redux';
// import { walletAction } from 'store/globalReducer';
import ApproveButton from './components/ApproveButton';
import { buy } from 'services/walletService/buyService/buy';
// import Web3 from 'services/walletService/initWeb3';
import { signAndSendTx } from 'services/walletService/supportService/signAndSendTx';

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
  margin: 90px auto 0 auto;
  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`;
const BuyQuantum = () => {
  // const intanceValue = Web3.getInstance;
  const [allow, setAllow] = useState(false);

  const curAddress = JSON.parse(
    localStorage.getItem('StoreWallet')!,
  )?.currentAddress;
  const tokenSymbol = 'USDC';
  const toAddress = '0x94C00A503a2eF543279B92403AE2f1c93d01E3fa'; // market
  const amount = '3'; // amount
  const tokenID = '2';
  // Handle Buy
  const handleBuy = async () => {
    try {
      const buyCoin = await buy(curAddress, 0, tokenID, tokenSymbol);
      console.log(buyCoin);
      const receipt = await signAndSendTx(buyCoin);
      console.log(receipt);
    } catch (error) {
      console.log(error);
    }
  };
  //set up allow
  const handleAction = data => {
    setAllow(data);
  };
  const [openConnect, setOpenConnect] = useState(false);
  const storeWallet = JSON.parse(
    localStorage.getItem('StoreWallet')!,
  )?.currentAddress;
  useEffect(() => {
    storeWallet ? setOpenConnect(false) : setOpenConnect(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <LabelPrice>{amount} USDC</LabelPrice>
            {!storeWallet ? (
              <StyledButton>
                <ButtonQuantum onclick={() => handleOpenConnect()}>
                  BUY NOW
                </ButtonQuantum>
              </StyledButton>
            ) : (
              <StyledGroupButton>
                <ApproveButton
                  curAddress={curAddress}
                  tokenSymbol={tokenSymbol}
                  toAddress={toAddress}
                  amount={amount}
                  handleAction={handleAction}
                />
                <ButtonQuantum
                  margin="0 0 0 20px"
                  disable={allow ? false : true}
                  onclick={() => handleBuy()}
                >
                  BUY
                </ButtonQuantum>
              </StyledGroupButton>
            )}
          </StyledQuantumItem>
        </Row>
        <ModalConnectWallet
          onClose={handleCloseConnect}
          isOpen={openConnect}
          handle={handleClose}
        />
      </StyledMain>
      {/* <Footer /> */}
    </>
  );
};

export default BuyQuantum;
