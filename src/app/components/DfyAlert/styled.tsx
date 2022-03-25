import { Dialog, styled } from '@mui/material';
import * as React from 'react';
export const Modal = styled(Dialog)(({ theme }) => ({
  '.MuiPaper-root': {
    borderRadius: '20px',
    maxWidth: '700px',
    width: '100%',
    minHeight: '367px',
    padding: '0px 0px 24px 0px',
    background: '#3D414B',
    '.MuiTypography-root': {
      display: 'flex',
      justifyContent: 'center',
    },
    '.MuiDialogActions-root': {
      display: 'flex',
      justifyContent: 'center',
    },
    '.MuiDialogContent-root': {
      textAlign: 'center',
    },
  },
  '.MuiButton-root': {
    backgroundImage:
      'linear-gradient(221.15deg, #BD8727 0%, #FFD574 49.02%, #FECA50 62.02%, #BD8727 101.47%)',
    minWidth: '140px',
    minHeight: '48px',
    borderRadius: '1000px',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
  },

  '.myLink': {
    color: '#2596FF',
  },
}));
