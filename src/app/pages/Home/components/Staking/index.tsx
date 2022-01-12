import React from 'react';
import StakingNftImage from 'app/assets/img/Staking/stakingNft.png';
import StakingCupImage from 'app/assets/img/Staking/stakingCup.png';
import { Row, Col } from 'react-bootstrap';

import {
  StyledContainerFluid,
  StyledDescLeft,
  StyledDescRight,
  StyledImgNft,
  StyledStaking,
  StyledStakingColLeft,
  StyledStakingColRight,
  StyledStakingTitleLeft,
  StyledStakingTitleRight,
  StyledTitleLeft,
  StyledVideo,
} from './styled';
const Staking = () => {
  return (
    <>
      <StyledStaking id="staking">
        <Row className="mt-156">
          <StyledStakingColLeft
            lg={{ span: 6, order: 1 }}
            xs={{ order: 2 }}
            className="mt-170"
          >
            <StyledStakingTitleLeft>STAKING &</StyledStakingTitleLeft>
            <StyledTitleLeft>LIQUIDITY REWARDS</StyledTitleLeft>
            <StyledDescLeft>
              Holders of the native STATE token will be able to stake or enter
              into liquidity pools to earn rewards. Early adopters acquiring one
              of the limited edition Quantum Accelerator NFTs get access to
              exclusive content, enhanced rewards and multiplier bonuses.
            </StyledDescLeft>
          </StyledStakingColLeft>
          <Col lg={{ span: 6, order: 1 }} xs={{ order: 1 }}>
            <StyledImgNft image={StakingNftImage} height={1186} />
          </Col>
        </Row>
        <Row className="mt-350">
          <Col lg={6}>
            <StyledImgNft
              image={StakingCupImage}
              height={780}
              className="mt-200"
            />
          </Col>
          <StyledStakingColRight lg={6}>
            <StyledStakingTitleRight>
              <span>TOURNAMENT</span>
              <span>& EVENTS</span>
            </StyledStakingTitleRight>
            <StyledDescRight>
              Gamestate will host community and partner-sponsored tournaments
              and events in the WAGMI stadium with prizes and incentives for the
              winners.
            </StyledDescRight>
            <StyledVideo
              linkVideo="http://136.243.47.124/GS_Cinematic_v04_HQ.mp4"
              radius="10"
              shadow
            />
          </StyledStakingColRight>
          {/* <StyledVideo
        width="100%"
        height="100%"
        autoPlay
        loop
        muted={isTurnOnSound}
        playsInline
        preload="auto"
      >
        <source
          // src="https://defiforyou.mypinata.cloud/ipfs/QmWAkpPw3fstuK3F7UjuAQ1YEHamftzB82nVnv7UtnQAoQ"
          src="http://136.243.47.124/Gamestate%20SFX%20MIX%201.mp4"
          type="video/mp4"
        />
            </StyledVideo> */}
        </Row>
      </StyledStaking>
      <StyledContainerFluid />
    </>
  );
};

export default Staking;
