import React, { useState, useEffect } from 'react';
import { Stack, Link } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import { Wrapper, Title, StyledIconButton } from './styled';
import Tooltip from '@mui/material/Tooltip';

export default function ShareMenu() {
  const [isCopied, setIsCopied] = useState(false);

  const nftUrl = window.location.href;

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;

    if (isCopied) {
      navigator.clipboard.writeText(nftUrl);

      id = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }

    return () => {
      if (id) {
        clearTimeout(id);
      }
    };
  }, [isCopied, nftUrl]);

  return (
    <Wrapper>
      <Title gutterBottom>Share NFT</Title>
      <Stack direction="row" spacing={1}>
        <Tooltip title="Copied" open={isCopied}>
          <StyledIconButton onClick={() => setIsCopied(true)}>
            <LinkIcon />
          </StyledIconButton>
        </Tooltip>
        <StyledIconButton
          component={Link}
          underline="none"
          target="_blank"
          href={`https://www.facebook.com/dialog/share?app_id=${
            process.env.REACT_APP_FACEBOOK_APP_ID
          }&display=page&href=${encodeURIComponent(
            nftUrl,
          )}&quote=${encodeURIComponent(
            'An amazing item in Gamestate Metaverse',
          )}`}
        >
          <FacebookIcon />
        </StyledIconButton>
        <StyledIconButton
          component={Link}
          underline="none"
          target="_blank"
          className="twitter-share-button"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            'An amazing item in the @gamestate_one',
          )}&url=${encodeURIComponent(nftUrl)}&hashtags=Metaverse`}
        >
          <TwitterIcon />
        </StyledIconButton>
        <StyledIconButton
          component={Link}
          underline="none"
          target="_blank"
          href={`https://t.me/share/url?text=${encodeURIComponent(
            'An amazing item in Gamestate Metaverse',
          )}&url=${encodeURIComponent(nftUrl)}&hashtags=gamestate,metaverse`}
        >
          <TelegramIcon />
        </StyledIconButton>
        <StyledIconButton
          component={Link}
          underline="none"
          target="_blank"
          href={`mailto:?subject=${encodeURIComponent(
            'An amazing item in Gamestate Metaverse',
          )}&body=${encodeURIComponent(nftUrl)}`}
        >
          <EmailIcon />
        </StyledIconButton>
      </Stack>
    </Wrapper>
  );
}
