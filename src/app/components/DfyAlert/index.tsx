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
import wrong from './assets/Error.svg';
import success from './assets/success.svg';
import successBurn from './assets/successBurn.svg';
import wait from './assets/wait.svg';
import { Modal } from './styled';
import { ReactNode } from 'react';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface DfyAlertProps {
  type?: 'danger' | 'success' | 'burn' | 'successBurn' | 'wait';
  alertText: ReactNode;
  messageText: ReactNode;
  handle: Function;
  isOpen: boolean;
  onClose: Function;
  linkText?: string;
  afterLinkText?: string;
}

export function DfyAlert(props: DfyAlertProps) {
  const handleClose = () => {
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
        <DialogTitle>
          {props.type === 'success' ? (
            <img src={success} alt="" />
          ) : props.type === 'danger' ? (
            <img src={wrong} alt="" />
          ) : props.type === 'wait' ? (
            <img src={wait} alt="" />
          ) : (
            <img src={successBurn} alt="" />
          )}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ color: 'white', display: 'block !important' }}
          >
            {props.alertText}
          </DialogContentText>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ color: 'white', display: 'block !important' }}
          >
            {props.messageText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </Modal>
    </>
  );
}
