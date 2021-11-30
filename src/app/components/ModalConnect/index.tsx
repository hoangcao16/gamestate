/**
 *
 * Alert
 *
 */
import * as React from 'react';
import Web3 from 'services/walletService/initWeb3';

import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';

import metaBinance from './assets/Meta-Binane.svg';
import Trust from './assets/Trust.svg';
import QR from './assets/QR.svg';
import { Modal, ButtonCustom, BoxCustom } from './styled';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';
// import { DfyConfirm } from '../DfyConfirm';
// import { authService } from 'services/authService';
// import { store } from 'index';
// import { walletAction } from 'store/globalReducer';
// import { DfyAlert } from '../DfyAlert';

import styled from 'styled-components';
import Logo from 'app/assets/img/Logo/logo.png';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
interface DfyAlertProps {
  handle: Function;
  isOpen: boolean;
  onClose: Function;
}
// const handleClose: Function = (e: any) => {};
interface BtnWalletProps {
  types: string;
  img: string;
  text: string;
  handle: Function;
}
const BtnWallet = (props: BtnWalletProps) => {
  const handleClick = () => {
    props.handle();
  };
  return (
    <ButtonCustom onClick={handleClick} types={props.types}>
      <span>{props.text}</span>
      <img
        style={{
          width: '54px',
          maxHeight: '40px',
        }}
        src={props.img}
        alt=""
      />
    </ButtonCustom>
  );
};

export default function DfyPopupConnectWallet(props: DfyAlertProps) {
  // const storage = store.getState();

  const instanceValue = Web3.getInstance;
  // const [confirm, setConfirm] = React.useState(false);
  // const [openError, setOpenError] = React.useState(false);
  // const [errorMessage, setErrorMessage] = React.useState('');
  // const [currentWallet, setCurrentWallet] = React.useState('');
  const [loading1, setLoading1] = React.useState(false);
  const [loading2, setLoading2] = React.useState(false);
  const [loading4, setLoading4] = React.useState(false);
  const handleClose = () => {
    props.onClose();
    setLoading1(false);
    setLoading2(false);
    setLoading4(false);

    return props.handle();
  };

  const handlerClickConnect = key => {
    switch (key) {
      case 'Meta':
        (async () => {
          setLoading1(true);
          setLoading2(false);
          setLoading4(false);
          localStorage.setItem('extensionName', 'Metamask');
          await instanceValue.setWeb3();
          // await onCheckEmailAssociationWalletAddress();
          setLoading1(false);
          handleClose();
        })();
        break;
      case 'Trust':
        (async () => {
          setLoading2(true);
          setLoading1(false);
          setLoading4(false);
          localStorage.setItem('extensionName', 'Metamask');
          await instanceValue.setWeb3();
          // await onCheckEmailAssociationWalletAddress();
          setLoading2(false);
          handleClose();
        })();
        break;
      case 'OQ':
        (async () => {
          setLoading4(true);
          setLoading1(false);
          setLoading2(false);
          localStorage.setItem('extensionName', 'WalletConnect');
          await instanceValue.setWeb3();
          // await onCheckEmailAssociationWalletAddress();
          setLoading4(false);
          handleClose();
        })();

        break;
      default:
        break;
    }
  };

  // const onCheckEmailAssociationWalletAddress = async () => {
  //   const curAddress = JSON.parse(
  //     localStorage.getItem('StoreWallet')!,
  //   ).currentAddress;

  //   // if (userLogin?.email) {
  //   //   const params = {
  //   //     email: userLogin?.email,
  //   //     type: 1,
  //   //     walletAddress: curAddress,
  //   //   };
  //   //   console.log(curAddress);
  //   //   try {
  //   //     const response = await authService.checkValidate(params);
  //   //     const dataCheckValidate = response?.data;
  //   //     if (response.status === 200) {
  //   //       if (!dataCheckValidate?.userId) {
  //   //         setCurrentWallet(curAddress);
  //   //         setConfirm(true);
  //   //       }
  //   //     }
  //   //   } catch (error: any) {
  //   //     if (error.response.status === 400) {
  //   //       console.log(error, 'connect fail');
  //   //       setErrorMessage(error.response.data.errorCodes[0]);
  //   //       handleOpenEr();
  //   //       store.dispatch(walletAction(null));
  //   //       localStorage.removeItem('StoreWallet');
  //   //       localStorage.removeItem('extensionName');
  //   //       localStorage.removeItem('lastToken');
  //   //     }
  //   //   }
  //   // }
  // };

  // const handleCloseModalCf = () => {
  //   setConfirm(false);
  // };

  // const handleSubmitConnect = async () => {
  //   console.log('todo');

  //   try {
  //     await authService.connectWalletAddressWithEmail({
  //       walletAddress: currentWallet,
  //       lastToken: localStorage.getItem('lastToken'),
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     store.dispatch(walletAction(null));
  //     localStorage.removeItem('StoreWallet');
  //     localStorage.removeItem('extensionName');
  //     localStorage.removeItem('lastToken');
  //   }
  // };

  // const handleOpenEr = () => {
  //   setOpenError(true);
  // };

  // const handleCloseError = () => {
  //   setOpenError(false);
  // };

  return (
    <>
      <Modal
        open={props.isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <StyledModal>
          <DialogTitle sx={{ m: 0, p: 2 }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: '#000',
              }}
            >
              <CancelIcon sx={{ color: '#E0E0E0' }} />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <img src={Logo} alt="logo" className="LogoModalWallet" />
            <p className="content-title">Connect your wallet.</p>
            <p className="content-text">
              By connecting your wallet, you agree to our Terms of Service and
              our Privacy Policy.
            </p>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingBottom: '15px',
                position: 'relative',
                maxWidth: '480px',
                margin: '0 auto',
              }}
            >
              {loading1 ? (
                <ButtonCustom types="1" sx={{ justifyContent: 'center' }}>
                  <CircularProgress />
                </ButtonCustom>
              ) : (
                <BtnWallet
                  handle={() => handlerClickConnect('Meta')}
                  types="1"
                  img={metaBinance}
                  text="MetaMask"
                />
              )}
              {loading4 ? (
                <ButtonCustom types="4" sx={{ justifyContent: 'center' }}>
                  <CircularProgress />
                </ButtonCustom>
              ) : (
                <BtnWallet
                  handle={() => handlerClickConnect('OQ')}
                  types="4"
                  img={QR}
                  text="WalletConnect"
                />
              )}
              {loading2 ? (
                <ButtonCustom types="2" sx={{ justifyContent: 'center' }}>
                  <CircularProgress />
                </ButtonCustom>
              ) : (
                <BtnWallet
                  handle={() => handlerClickConnect('Trust')}
                  types="2"
                  img={Trust}
                  text="Trust Wallet"
                />
              )}
            </Box>
            <BoxCustom sx={{}}>
              <span>
                Extensions and Mobile Apps allowed to connect to Gane state
                account:
              </span>
              <br />
              <span>
                <b>On Desktop</b>: MetaMask, QR code WalletConnect and Binance
                Chain extensions
              </span>
              <br />
              <span>
                <b>On Mobile</b>: Trust, SafePal, MetaMask and WalletConnect
                support
              </span>
              <br />
              <span>
                Please access our website through browser of the wallet app to
                connect your wallet to Gane state account.
              </span>
            </BoxCustom>
          </DialogContent>
        </StyledModal>
      </Modal>
      {/* {confirm ? (
        <DfyConfirm
          onClose={handleCloseModalCf}
          isOpen={confirm}
          currentAddress={currentWallet}
          email="{userLogin?.email}"
          handle={handleSubmitConnect}
        />
      ) : (
        ''
      )} */}
      {/* {openError ? (
        <DfyAlert
          type="danger"
          onClose={handleCloseError}
          isOpen={openError}
          alertText={errorMessage}
          handle={() => handleClose()}
        />
      ) : (
        ''
      )} */}
    </>
  );
}

const StyledModal = styled.div`
  background-color: #000000;
  border-radius: 32px;
  position: relative;
`;
