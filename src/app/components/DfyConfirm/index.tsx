/**
 *
 * Alert
 *
 */
import * as React from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Modal } from './styled';
// import { ShortenWalletAddress } from 'utils/formatWalletAddress';
import { store } from 'index';
import { walletAction } from 'store/globalReducer';

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
  currentAddress: string;
  email: string;
}

export function DfyConfirm(props: DfyAlertProps) {
  const handleClose = () => {
    props.onClose();
    store.dispatch(walletAction(null));
    localStorage.removeItem('StoreWallet');
    localStorage.removeItem('extensionName');
    localStorage.removeItem('lastToken');
  };

  const handle = () => {
    props.onClose();
    return props.handle();
  };

  return (
    <>
      <Modal
        open={props.isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ m: 0, p: 2, fontSize: '30px' }}>
          Confirmation
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ color: 'white' }}
          >
            <DialogContentText id="alert-dialog-slide-description">
              Do you want to link the address{' '}
              {/* <span style={{ color: '#2596FF' }}>
                <ShortenWalletAddress numShort={5}>
                  {props.currentAddress}
                </ShortenWalletAddress>{' '}
              </span> */}
              to the email{' '}
              <span style={{ color: '#2596FF' }}>{props.email}</span>?
            </DialogContentText>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handle}>
            Submit
          </Button>
        </DialogActions>
      </Modal>
    </>
  );
}
