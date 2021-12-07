import Header from 'app/components/Navbar';
import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import QuantumItem from './components/QuantumItem';
import ButtonQuantum from './components/ButtonQuantum';
import LabelPrice from './components/LabelPrice';
import ModalConnectWallet from 'app/components/ModalConnect';
import ApproveButton from './components/ApproveButton';
import { buy } from 'services/walletService/buyService/buy';
import { signAndSendTx } from 'services/walletService/supportService/signAndSendTx';
import { CircularProgress } from '@mui/material';
import { useHistory } from 'react-router';
import {
  StyledMain,
  StyledQuantumItem,
  StyledTitle,
  StyledDesc,
  StyledButton,
  StyledGroupButton,
} from './style';
import { useBuyNFTSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { buyNFTSelector } from './slice/selectors';
import { approveNFTSelector } from './components/ApproveButton/slice/selectors';
const BuyQuantum = () => {
  const dispatch = useDispatch();

  // const [allow, setAllow] = useState(false);
  // const [loading, setLoading] = useState(false);
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
  const handleAction = data => {
    // setAllow(data);
  };
  // Handle Buy
  const handleBuy = async () => {
    // setLoading(true);
    // try {
    //   const buyCoin = await buy(curAddress, 0, tokenSymbol);
    //   console.log(buyCoin);
    //   const receipt = await signAndSendTx(buyCoin);
    //   console.log(receipt);
    //   if (receipt.status) {
    //     setLoading(false);
    //     history.push('/order');
    //   }
    // } catch (error) {
    //   console.log(error);
    //   setLoading(false);
    // }
    // setLoading(true);
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
  }, [curAddress]);

  const handleOpenConnect = () => {
    setOpenConnect(true);
  };
  const handleCloseConnect = () => {
    setOpenConnect(false);
  };

  const handleClose = () => {};
  const { isAllow } = useSelector(approveNFTSelector);
  console.log('isAllow', isAllow);
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
            {!curAddress ? (
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
                  handleAction={handleAction}
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
