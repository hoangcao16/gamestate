import { Dialog, styled } from '@mui/material';
import Box from '@mui/material/Box';

export const Modal = styled(Dialog)(({ theme }) => ({
  '.MuiPaper-root': {
    borderRadius: '42px',
    boxSizing: 'border-box',
    maxWidth: '720px',
    // minHeight: '367px',
    maxHeight: 'unset',
    // padding: '0px 0px 24px 0px',
    boxShadow: '0px 3px 24px #FFFFFF76',
    padding: '24px',
    // background: 'linear-gradient(to right, red, purple)',
    [theme.breakpoints.down('sm')]: {
      margin: '10px',
    },
    position: 'relative',
    backgroundColor: '#555555',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      maxWidth: '673px',
      height: '100%',
      maxHeight: '700px',
      left: '0px',
      bottom: '0px',
      borderRadius: '50%',
      filter: 'blur(50px)',
      background: 'linear-gradient(to right, #163F8C, #9E08A6)',
    },
    '.MuiDialogActions-root': {
      display: 'flex',
      justifyContent: 'center',
    },
    '.MuiTypography-body1': {
      textAlign: 'center',
    },
    '.MuiTypography-root': {
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '30px',
      lineHeight: '37px',
      color: '#FFFFFF',
      // padding: '20px 20px 52px 36px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
        lineHeight: '25px',
        padding: '20px 10px 32px 20px',
      },
    },
    '.MuiDialogContent-root': {
      padding: '0 39px',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        padding: '0 20px',
      },
    },
    '.MuiSvgIcon-root': {
      fontSize: '39.5px',
    },
    '.LogoModalWallet': {
      maxWidth: '260px',
    },
    '.content-title': {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '40px',
      lineHeight: '40px',
      color: '#FFFFFF',
      marginTop: '20px',
      marginBottom: '36px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '24px',
        lineHeight: '18px',
      },
    },
    '.content-text': {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '40px',
      color: '#FFFFFF',
      opacity: 0.8,
      marginBottom: '26px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
        lineHeight: '18px',
      },
    },
  },
  '.MuiButton-root': {
    minWidth: '140px',
    borderRadius: '1000px',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
  },
}));
interface color {
  types: string;
}

export const ButtonCustom = styled('button')<color>(({ theme, types }) => ({
  background:
    types === '1'
      ? 'transparent linear-gradient(90deg, #FFAB0D 0%, #FFCB69 100%)'
      : types === '2'
      ? 'transparent linear-gradient(270deg, #356EAA 0%, #469CD1 100%) 0% 0% no-repeat padding-box;'
      : 'transparent linear-gradient(270deg, #0046BE 0%, #6100B5 100%) 0% 0% no-repeat padding-box;',
  outline: 'none',
  borderRadius: '5px',
  border: 'none',
  margin: '8px 0',
  height: '60px',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0px 14px',
  cursor: 'pointer',
  color: '#FFFFFF',
  [theme.breakpoints.down('sm')]: {
    padding: '0px 6px',
  },
}));

export const BoxCustom = styled(Box)(({ theme }) => ({
  padding: '15px 16px 20px 16px',
  marginTop: '25px',
  marginBottom: '25px',
  color: '#F1F1F1',
  borderRadius: '4px',
  border: '1px dashed #707070',
  textAlign: 'left',
  fontSize: '16px',
  fontWeight: 'normal',
}));
