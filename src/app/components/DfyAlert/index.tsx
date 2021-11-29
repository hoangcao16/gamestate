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
import { Modal } from './styled';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
interface DfyAlertProps {
  type?: 'danger' | 'success' | 'error';
  alertText: string;
  handle: Function;
  isOpen: boolean;
  onClose: Function;
}

export function DfyAlert(props: DfyAlertProps) {
  const handleClose = () => {
    props.onClose();
    return props.handle();
  };

  function createMarkup() {
    return { __html: props.alertText };
  }
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
          ) : (
            'Oopps...!'
          )}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ color: 'white' }}
          >
            <span dangerouslySetInnerHTML={createMarkup()}></span>
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
