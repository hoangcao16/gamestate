import { Grid, IconButton } from '@mui/material';
import { Box, styled } from '@mui/system';
import React, { useState } from 'react';
import { ShortenWalletAddress } from 'utils/formatWalletAddress';
import image from './assets/copy_image.svg';

const getBlockchainFromIdNetwork = id => {
  switch (id) {
    case 80001:
      return 'Mumbai-Testnet';
    default:
      return 'Polygon-Mainnet';
  }
};

interface DfyBlockchainInformationProps {
  collectionAddress?: string;
  nftTokenId?: string;
  nftStandard?: string;
  blockchainNetwork?: number;
  metadata?: string;
}

export default function DfyBlockchainInformation(
  props: DfyBlockchainInformationProps,
) {
  const [copyAddressSuccess, setCopyAddressSuccess] = useState(false);
  const [copyTokenIdSuccess, setCopyTokenIdSuccess] = useState(false);

  const handleAddressCopied = () => {
    navigator.clipboard.writeText(`${props.collectionAddress}`);
    setCopyAddressSuccess(true);
    setTimeout(() => {
      setCopyAddressSuccess(false);
    }, 1000);
  };

  const handleTokenIdCopied = () => {
    navigator.clipboard.writeText(`${props.nftTokenId}`);
    setCopyTokenIdSuccess(true);
    setTimeout(() => {
      setCopyTokenIdSuccess(false);
    }, 1000);
  };

  return (
    <Wrapper>
      <FirstLine>Blockchain information</FirstLine>
      <CustomLine>
        <Grid container>
          <Grid xs={6}>Collection contract:</Grid>

          {props.collectionAddress ? (
            <Grid xs={6} container style={{ textAlign: 'right', gap: '14px' }}>
              <Grid item flex={1}>
                {!copyAddressSuccess ? (
                  <LinkCollection
                    href={`${process.env.REACT_APP_BLOCK_EXPLORER_URL}/address/${props.collectionAddress}`}
                    target="_blank"
                  >
                    <ShortenWalletAddress numShort={8}>
                      {props.collectionAddress}
                    </ShortenWalletAddress>
                  </LinkCollection>
                ) : (
                  'Copied'
                )}
              </Grid>
              <Grid item>
                <ButtonCopy onClick={handleAddressCopied}>
                  <img src={image} alt="icon coppy" />
                </ButtonCopy>
              </Grid>
            </Grid>
          ) : (
            <Grid xs={6} sx={{ textAlign: 'right' }}>
              No data
            </Grid>
          )}
        </Grid>
      </CustomLine>
      <CustomLine>
        <Grid container>
          <Grid xs={6}>NFT token ID:</Grid>

          {props.nftTokenId !== null ? (
            <Grid xs={6} container style={{ textAlign: 'right', gap: '14px' }}>
              <Grid item flex={1}>
                {!copyTokenIdSuccess ? props.nftTokenId : 'Copied'}
              </Grid>
              <Grid item>
                <ButtonCopy onClick={handleTokenIdCopied}>
                  <img src={image} alt="icon coppy" />
                </ButtonCopy>
              </Grid>
            </Grid>
          ) : (
            <Grid xs={6} sx={{ textAlign: 'right' }}>
              No data
            </Grid>
          )}
        </Grid>
      </CustomLine>
      <CustomLine>
        <Grid container>
          <Grid xs={6}>NFT standard:</Grid>
          <Grid xs={6} style={{ textAlign: 'right' }}>
            {props.nftStandard !== null ? props.nftStandard : 'No data'}
          </Grid>
        </Grid>
      </CustomLine>
      <CustomLine>
        <Grid container>
          <Grid xs={6}>Blockchain:</Grid>
          <Grid xs={6} style={{ textAlign: 'right' }}>
            {props.blockchainNetwork !== null
              ? getBlockchainFromIdNetwork(props.blockchainNetwork)
              : 'No data'}
          </Grid>
        </Grid>
      </CustomLine>
      <FinalLine>
        <Grid container>
          <Grid xs={6}>Metadata:</Grid>
          {props.metadata ? (
            <Grid xs={6} container style={{ textAlign: 'right', gap: '14px' }}>
              <LinkCollection href={props.metadata} target="_blank">
                <ShortenWalletAddress numShort={20}>
                  {props.metadata}
                </ShortenWalletAddress>
              </LinkCollection>
            </Grid>
          ) : (
            <Grid xs={6} sx={{ textAlign: 'right' }}>
              No data
            </Grid>
          )}
        </Grid>
      </FinalLine>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(({ theme }) => ({
  marginTop: '20px',
  height: '270px',
  width: '417px',
  borderRadius: '10px',
  background: '#3D414B',
}));

const Line = styled(Box)(({ theme }) => ({
  height: '44px',
  width: '100%',
  paddingRight: '17px',
  paddingLeft: '24px',
  fontSize: '16px',
  lineHeight: '20px',
  fontStyle: 'normal',
  fontWeight: 500,
  color: '#FFFFFF',
}));

const FirstLine = styled(Line)(({ theme }) => ({
  paddingTop: '14px',
  fontSize: '20px',
  lineHeight: '24px',
  fontStyle: 'normal',
  fontWeight: 600,
}));

const FinalLine = styled(Line)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const CustomLine = styled(Line)(({ theme }) => ({
  borderBottom: `1px solid #686B73`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const LinkCollection = styled('a')(({ theme }) => ({
  textDecoration: 'underline',
  color: '#2596FF',
}));

const ButtonCopy = styled(IconButton)(({ theme }) => ({
  width: '17px',
  height: '20px',
}));
