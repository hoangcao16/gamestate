import { CircularProgress } from '@mui/material';
import ChipEffect from 'app/assets/videos/Chip_Effect_2.mp4';
import { DfyAlert } from 'app/components/DfyAlert';
import ModalConnectWallet from 'app/components/ModalConnect';
import { selectWallet } from 'app/components/Wallet/slice/selectors';
import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { testContract } from 'services/walletService/addCurrencyService/addCurrency';
// import { addWhiteList } from 'services/walletService/addWhiteListService/addWhiteList';
// import { setupReceive } from 'services/walletService/setupReceiveFeeService/setupReceive';
// import { signAndSendTx } from 'services/walletService/supportService/signAndSendTx';
import ApproveButton from './components/ApproveButton';
import { approveNFTSelector } from './components/ApproveButton/slice/selectors';
import ButtonQuantum from './components/ButtonQuantum';
import LabelPrice from './components/LabelPrice';
import QuantumItem, {
  StyledBuyItem,
  StyledBuyItemBlack,
} from './components/QuantumItem';
import { useBuyNFTSlice } from './slice';
import { buyNFTSelector } from './slice/selectors';
import {
  ContainQuantumItem,
  RowInputStyle,
  StyledButton,
  StyledBuyItemVideo,
  StyledColInput,
  StyledDesc,
  StyledGroupButton,
  StyledInput,
  StyledMain,
  StyledQuantumItem,
  StyledSaleOff,
  StyledTitle,
} from './style';
import saleOff10 from 'app/assets/img/BuyQuantum/saleOff10.svg';
import saleOff7 from 'app/assets/img/BuyQuantum/saleOff7.svg';
import { history } from 'app';

const BuyQuantum = () => {
  const [couponCode, setCouponCode] = useState('');

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
  const { isLoading, isError, isSuccess } = useSelector(buyNFTSelector);
  //set up allow

  // Handle Buy
  const handleBuy = couponCode => {
    console.log(isAlreadyBought, 'isAlreadyBought');
    if (isAlreadyBought) {
      setOpenBought(true);
    } else {
      dispatch(
        actions.buyNFTRequest({
          from: curAddress,
          payableAmount: 0,
          tokenSymbol,
          couponCode,
        }),
      );
    }
  };

  //open modal connect
  const [openConnect, setOpenConnect] = useState(false);
  useEffect(() => {
    curAddress ? setOpenConnect(false) : setOpenConnect(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //open modal message error
  const [openError, setOpenError] = useState(false);
  useEffect(() => {
    isError ? setOpenError(true) : setOpenError(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);
  const handleCloseError = () => setOpenError(false);

  //open modal message success
  const [openSuccess, setOpenSuccess] = useState(false);
  useEffect(() => {
    isSuccess ? setOpenSuccess(true) : setOpenSuccess(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);
  const handleCloseSuccess = () => setOpenSuccess(false);

  //open modal message success
  const [openBought, setOpenBought] = useState(false);
  const handleCloseBought = () => setOpenBought(false);

  //
  const handleOpenConnect = () => {
    setOpenConnect(true);
  };
  const handleCloseConnect = () => {
    setOpenConnect(false);
  };

  const handleClose = () => {};
  const {
    isAllow,
    isPublicSell,
    salePriceBc,
    discountPercentageBc,
    isAlreadyBought,
  } = useSelector(approveNFTSelector);
  console.log(salePriceBc, 'salePriceBc');

  const handleChangeCode = e => {
    setCouponCode(e.target.value);
  };

  // const handleTest = async () => {
  //   try {
  //     const abx = await testContract(curAddress);
  //     await signAndSendTx(abx);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleAddWhitelist = async () => {
  //   try {
  //     const transfer = await addWhiteList(curAddress);
  //     await signAndSendTx(transfer);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleSetupReice = async () => {
  //   try {
  //     const transfer = await setupReceive(curAddress);
  //     await signAndSendTx(transfer);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getImageDiscount = discount => {
    switch (discount) {
      case '10':
        return <StyledSaleOff src={saleOff10} alt="" />;
      case '7':
        return <StyledSaleOff src={saleOff7} alt="" />;
      default:
        return '';
    }
  };
  return (
    <>
      {/* <Header /> */}
      <StyledMain>
        {/* <button onClick={handleTest}>test</button>
        <button onClick={handleAddWhitelist}>addWhitelist</button>
        <button onClick={handleSetupReice}>setupReceive</button> */}
        <DfyAlert
          type="danger"
          onClose={handleCloseError}
          isOpen={openError}
          alertText="Transaction failed!"
          messageText=""
          handle={() => handleClose()}
        />
        <DfyAlert
          type="success"
          onClose={handleCloseSuccess}
          isOpen={openSuccess}
          alertText="Your order is now complete! Thank you for your purchase."
          messageText="Please click below to view your NFT."
          handle={() => history.push('/nft-all')}
        />
        <DfyAlert
          type="danger"
          onClose={handleCloseBought}
          isOpen={openBought}
          alertText="This wallet has already purchased this NFT"
          messageText=""
          handle={() => handleClose()}
        />
        <Row>
          <StyledQuantumItem>
            <StyledTitle>Quantum Accelerator</StyledTitle>
            <StyledDesc>
              Experience enhancing NFT that rewards holders with airdrop
              opportunities, staking multipliers and early access to special
              events and more!
            </StyledDesc>
            <Row>
              <Col
                xs={{ order: 2 }}
                xl={{ order: 1 }}
                className="quantum-item-style d-flex justify-content-center mt-4 mt-xl-0 col-xl-6 col-12"
              >
                <ContainQuantumItem>
                  {getImageDiscount(discountPercentageBc)}
                  <QuantumItem />
                </ContainQuantumItem>
              </Col>
              <Col
                xs={{ order: 1 }}
                xl={{ order: 2 }}
                className="d-flex justify-content-md-center col-xl-6 col-12"
              >
                <StyledBuyItem>
                  <StyledBuyItemBlack>
                    <StyledBuyItemVideo autoPlay loop muted playsInline>
                      <source src={ChipEffect} type="video/mp4" />
                    </StyledBuyItemVideo>
                  </StyledBuyItemBlack>
                </StyledBuyItem>
              </Col>
            </Row>
            <LabelPrice className="mb-0">
              {isAlreadyBought ? '250' : salePriceBc} USDC
            </LabelPrice>
            <StyledDesc className="mb-0">
              Mint 1x random rarity Quantum Accelerator static NFT (1 to 1111
              numbered), un-numbered video link included.
            </StyledDesc>
            {isPublicSell ? (
              <RowInputStyle>
                <StyledColInput>
                  <StyledInput className="mb-3">
                    <Form.Label>COUPON CODE</Form.Label>
                    <Form.Control
                      type="text"
                      value={couponCode}
                      onChange={handleChangeCode}
                    />
                  </StyledInput>
                </StyledColInput>
              </RowInputStyle>
            ) : (
              ''
            )}

            {isEmpty(wallet.wallet) ? (
              <StyledButton className="mb-100">
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
                  onclick={() => handleBuy(couponCode)}
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
