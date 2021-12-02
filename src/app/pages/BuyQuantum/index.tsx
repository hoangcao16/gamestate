import Header from 'app/components/Navbar';
import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import QuantumItem from './components/QuantumItem';
import ButtonQuantum from './components/ButtonQuantum';
import LabelPrice from './components/LabelPrice';
import ModalConnectWallet from 'app/components/ModalConnect';
import ApproveButton from './components/ApproveButton';
import {
  buy,
  // getNftOnSellOf,
  getPrice,
} from 'services/walletService/buyService/buy';
import Web3 from 'services/walletService/initWeb3';
import { signAndSendTx } from 'services/walletService/supportService/signAndSendTx';
import BigNumber from 'bignumber.js';
import { CircularProgress } from '@mui/material';
import { checkApprove } from 'services/walletService/approveService/approve';
import { useHistory } from 'react-router';
import {
  StyledMain,
  StyledQuantumItem,
  StyledTitle,
  StyledDesc,
  StyledButton,
  StyledGroupButton,
} from './style';
const BuyQuantum = () => {
  const instanceValue = Web3.getInstance;
  const [allow, setAllow] = useState(false);
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [allowance, setAllowance] = useState<Number>();

  const history = useHistory();

  //Mock data
  const curAddress = JSON.parse(
    localStorage.getItem('StoreWallet')!,
  )?.currentAddress;
  const tokenSymbol = 'USDC';
  const toAddress = '0x94C00A503a2eF543279B92403AE2f1c93d01E3fa'; // market
  const tokenID = '2';
  //set up allow
  const handleAction = data => {
    setAllow(data);
  };
  // Handle Buy
  const handleBuy = async () => {
    setLoading(true);
    try {
      const buyCoin = await buy(curAddress, 0, tokenID, tokenSymbol);
      console.log('buyCoin', buyCoin);
      const receipt = await signAndSendTx(buyCoin);
      console.log(receipt);
      if (receipt.status) {
        setLoading(false);
        history.push('/order');
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  //get price
  useEffect(() => {
    if (localStorage.getItem('extensionName')) {
      (async () => {
        await instanceValue.setWeb3();
        //Get AllTokenId
        // const getId = await getTokenId();
        // console.log(getId);
        const price = await getPrice(tokenID);
        const priceY = Number(
          new BigNumber(price?.txData.price).dividedBy(10 ** 18).toFixed(),
        );
        await setAmount(`${priceY}`);
        // Check approve
        const res = await checkApprove(
          curAddress,
          tokenSymbol,
          toAddress,
          priceY,
        );
        const resDiv18 = Number(
          new BigNumber(res).dividedBy(10 ** 18).toFixed(),
        );
        if (resDiv18 >= Number(priceY)) {
          handleAction(true);
        } else {
          handleAction(false);
        }
        setAllowance(resDiv18);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenID, localStorage.getItem('StoreWallet')]);

  // useEffect(() => {
  //   if (localStorage.getItem('extensionName')) {
  //     (async () => {
  //       await instanceValue.setWeb3();
  //       const allTokenIds = await getTokenId();
  //       console.log(curAddress);
  //       const tokenIdsOwner = await getNftOnSellOf(curAddress);
  //       const tokenIdsOthers = await allTokenIds?.txData?.filter(
  //         item => !tokenIdsOwner?.txData?.includes(item),
  //       );
  //       console.log('others', tokenIdsOthers);
  //     })();
  //   }
  // }, []);

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
                  allowance={allowance}
                />
                <ButtonQuantum
                  margin="0 0 0 20px"
                  disable={allow ? false : true}
                  onclick={handleBuy}
                >
                  {loading ? (
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
