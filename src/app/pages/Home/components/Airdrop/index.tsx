import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { StyledFourthButton } from 'app/components/Navbar/style';
import { StyledTitle } from '../TokenSale';
const StyledAirdropSection = styled(Container)`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 991px) {
    margin-top: 80px;
  }
`;
const StyledTitleAirdrop = styled(StyledTitle)`
  text-shadow: unset;
  @media screen and (max-width: 768px) {
    &:before {
      filter: unset;
      background: unset;
      box-shadow: -10px 28px 27px 8px #6294ef;
      height: 0 !important;
    }
  }
`;
const StyledButtonCode = styled(StyledFourthButton)`
  transition: 0.2s;
  max-width: 200px;
  padding: 0 12px;
  margin-top: 80px;
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;
const StyledTextCode = styled.span`
  font-size: 60px;
  margin-top: 40px;
  padding: 0 10px;
  border: 4px white dashed;
  color: #fff;
  @media screen and (max-width: 991px) {
    font-size: 30px;
    margin-top: 20px;
  }
`;
const StyledDesc = styled.span`
  color: #fff;
  font-size: 40px;
  margin: 40px 0;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
const StyledLink = styled.a`
  text-decoration: underline;
  color: #6395f0;
  &:hover {
    color: #6394f08d;
  }
`;
const Airdrop = () => {
  const [isShowCode, setIsShowCode] = useState(false);
  const [textCode, setTextCode] = useState('Copy');
  const handleClick = () => {
    setIsShowCode(true);
  };
  const handleCopyCode = () => {
    setTextCode('Copied');
    navigator.clipboard.writeText('MEGAVERSE');
  };
  return (
    <StyledAirdropSection>
      <StyledTitleAirdrop>AIRDROP</StyledTitleAirdrop>
      <StyledDesc>
        Use promo code to receive 20 STATE (
        <StyledLink
          href="https://twitter.com/Gamestate_one/status/1481233585218719746?s=20"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Airdrop!
        </StyledLink>
        )
      </StyledDesc>
      {!isShowCode ? (
        <StyledButtonCode onClick={handleClick}>
          SHOW PROMO CODE
        </StyledButtonCode>
      ) : (
        <>
          <StyledTextCode>MEGAVERSE</StyledTextCode>
          <StyledButtonCode onClick={handleCopyCode}>
            {textCode}
          </StyledButtonCode>
        </>
      )}
    </StyledAirdropSection>
  );
};

export default Airdrop;
