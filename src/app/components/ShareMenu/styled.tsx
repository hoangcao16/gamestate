import { Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)(({ theme }) => ({
  marginTop: '20px',
  borderRadius: '10px',
  background: '#3D414B',
  padding: '10px 20px',
  overflow: 'auto',
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '16px',
  color: '#ffffff',
}));

export const DescTypo = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  lineHeight: '14px',
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: '#ffffff',
  '& svg': {
    fontSize: 25,
  },
})) as typeof IconButton;
