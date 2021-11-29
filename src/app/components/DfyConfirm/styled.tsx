import { Dialog, styled } from '@mui/material';
export const Modal = styled(Dialog)(({ theme }) => ({
  '.MuiPaper-root': {
    borderRadius: '20px',
    minWidth: '700px',
    minHeight: '367px',
    padding: '0px 0px 24px 0px',
    // backgroundColor: [theme.palette.black[90]],
    '.MuiDialogActions-root': {
      display: 'flex',
      justifyContent: 'center',
    },
    '.MuiDialogContent-root': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '.MuiTypography-body1': {
      textAlign: 'center',
    },
  },
  '.MuiButton-root': {
    // backgroundImage: theme.palette.gradientGold.main,
    minWidth: '140px',
    minHeight: '48px',

    borderRadius: '1000px',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
  },
}));
