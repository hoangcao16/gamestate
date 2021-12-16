import Header from 'app/components/Navbar';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import QuantumItem from './components/QuantumItem';
import ButtonQuantum from './components/ButtonQuantum';
import LabelPrice from './components/LabelPrice';
import ModalConnectWallet from 'app/components/ModalConnect';
import ApproveButton from './components/ApproveButton';
import { CircularProgress } from '@mui/material';
import {
  StyledMain,
  StyledQuantumItem,
  StyledTitle,
  StyledDesc,
  StyledButton,
  StyledGroupButton,
  StyledBuyItemVideo,
  StyledBuyCardVideo,
} from './style';
import { StyledBuyItem } from './components/QuantumItem';
import { useBuyNFTSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { buyNFTSelector } from './slice/selectors';
import { approveNFTSelector } from './components/ApproveButton/slice/selectors';
import { selectWallet } from 'app/components/Wallet/slice/selectors';
import { isEmpty } from 'lodash';
import ChipEffect from 'app/assets/videos/Chip_Effect.mp4';

const BuyQuantum = () => {
  const dispatch = useDispatch();

  const wallet: any = useSelector(selectWallet);
  const { actions } = useBuyNFTSlice();
  //Mock data
  const curAddress = JSON.parse(
    localStorage.getItem('StoreWallet')!,
  )?.currentAddress;
  const tokenSymbol = 'USDC';
  const toAddress = process.env.REACT_APP_NFT_SALES_ADDRESS; // market
  const amount = '250';
  const isLoading = useSelector(buyNFTSelector).isLoading;
  //set up allow

  // Handle Buy
  const handleBuy = () => {
    dispatch(
      actions.buyNFTRequest({
        from: curAddress,
        payableAmount: 0,
        tokenSymbol,
      }),
    );
  };

  //open modal connect
  const [openConnect, setOpenConnect] = useState(false);
  useEffect(() => {
    curAddress ? setOpenConnect(false) : setOpenConnect(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenConnect = () => {
    setOpenConnect(true);
  };
  const handleCloseConnect = () => {
    setOpenConnect(false);
  };

  const handleClose = () => {};
  const { isAllow } = useSelector(approveNFTSelector);
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
            <Row mb-4>
              <Col
                xs={{ order: 2 }}
                xl={{ order: 1 }}
                className="d-flex justify-content-md-center mt-4 mt-xl-0 col-xl-6 col-12"
              >
                <QuantumItem />
              </Col>
              <Col
                xs={{ order: 1 }}
                xl={{ order: 2 }}
                className="d-flex justify-content-md-center col-xl-6 col-12"
              >
                <StyledBuyItem>
                  <StyledBuyCardVideo>
                    <StyledBuyItemVideo autoPlay loop muted playsInline>
                      <source src={ChipEffect} type="video/mp4" />
                    </StyledBuyItemVideo>
                  </StyledBuyCardVideo>
                </StyledBuyItem>
              </Col>
            </Row>
            <LabelPrice className="mb-4">{amount} USDC</LabelPrice>
            <StyledDesc className="mb-0">
              Purchase 1x Quantum Accelerator static NFT (numbered), un-numbered
              video link included.
            </StyledDesc>
            {isEmpty(wallet.wallet) ? (
              <StyledButton>
                <ButtonQuantum onclick={handleOpenConnect}>
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
                />
                <ButtonQuantum
                  margin="0 0 0 20px"
                  disable={isAllow ? false : true}
                  onclick={handleBuy}
                >
                  {isLoading ? (
                    <CircularProgress size={19} color="inherit" />
                  ) : (
                    'BUY'
                  )}
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
