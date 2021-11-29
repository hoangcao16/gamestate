import { Dialog, styled } from '@mui/material';
import * as React from 'react';
export const Modal = styled(Dialog)(({ theme }) => ({
  '.MuiPaper-root': {
    borderRadius: '20px',
    maxWidth: '700px',
    width: '100%',
    minHeight: '367px',
    padding: '0px 0px 24px 0px',
    backgroundColor: '#3D414B',
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
    // backgroundImage: theme.palette.gradientGold.main,
    minWidth: '140px',
    minHeight: '48px',
    borderRadius: '1000px',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
  },
}));
