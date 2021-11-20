import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import StakingNftImage from "../../assets/img/Staking/stakingNft.png"
import StakingCupImage from "../../assets/img/Staking/stakingCup.png"
import StakingGrid from "../../assets/img/Staking/stakingGrid.png"
import StakingUnifiled from "../../assets/img/Staking/stakingUnifiled.png"
const StyledContainerFluid = styled.div`
  background-image: url(${StakingGrid});
  @media screen and (max-width: 991px) {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 40%;
      left: 0;
      background-image: url(${StakingUnifiled});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      width: 100%;
      height: 63px;
    }
  }
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 315px;
`
const StyledStaking = styled(Container)`
  min-height: 1247px;
  .mt-156 {
    padding-top: 156px;
  }
  .mt-350 {
    margin-top: -350px;
    @media screen and (max-width: 991px) {
      margin-top: 0;
    }
  }
  @media screen and (max-width: 576px) {
    .row {
      /* margin: 0; */
    }
  }
  @media screen and (max-width: 767px) {
    .mt-156 {
      padding-top: 0;
    }
    /* .row {
      margin: 0;
    } */
    .mt-170 {
      margin-top: -400px;
    }
  }
`
const StyledStakingColLeft = styled(Col)`
  padding-left: 112px;
  @media screen and (max-width: 1399px) {
    padding-left: 0;
  }
  @media screen and (max-width: 991px) {
    margin-top: -400px;
  }
  @media screen and (max-width: 576px) {
    padding-left: 14px;
  }
`
const StyledStakingColRight = styled(Col)`
  padding-right: 146px;
  @media screen and (max-width: 1399px) {
    padding-right: 0;
  }
  @media screen and (max-width: 576px) {
    padding-right: 26px;
  }
`
const StyledStakingTitleLeft = styled.p`
  font-size: 77px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: 0;
  line-height: 60px;
  color: #e740f0;
  text-shadow: 0px 3px 6px #9e08a6, 0px 0px 98px #e740f0c4;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  margin-top: 135px;
  margin-left: 4px;
  display: inline-block;
  &::before {
    position: absolute;
    content: "";
    top: -50px;
    left: -16px;
    width: 44px;
    height: 179px;
    background: transparent linear-gradient(180deg, #163f8c 0%, #9e08a6 100%) 0%
      0% no-repeat padding-box;
    z-index: -1;
  }
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background: #e740f0 0% 0% no-repeat padding-box;
    filter: blur(40px);
    z-index: -1;
  }
  @media screen and (max-width: 991px) {
    /* margin-top: -160px; */

    font-size: 32px;
    line-height: 36px;
    &:after {
      top: 10px;
      left: 0;
      width: 28%;
      height: 15px;
      filter: blur(15px);
    }
  }
  @media screen and (max-width: 576px) {
    /* padding-left: 10px; */
    &:before {
      /* left: 3px; */
      height: 85px;
      width: 20px;
      top: -50%;
      left: -8px;
    }
  }
  /* @media screen and (max-width: 414px) {
    padding-left: 10px;
    &:before {
      left: 3px;
      height: 85px;
      width: 20px;
      top: -50%;
    }
  } */
`
const StyledImgNft = styled.div`
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: ${(props) => props.height}px;
  /* @media screen and (max-width: 1399px) {
    margin-top: ${(props) => props.top}px;
  } */
  @media screen and (max-width: 767px) {
    &.mt-200 {
      /* margin-top: -200px; */
      margin-bottom: -200px;
    }
  }
`
const StyledTitleLeft = styled.p`
  font-size: 50px;
  font-weight: normal;
  font-style: normal;
  color: #fff;
  letter-spacing: 0;
  line-height: 60px;
  text-transform: uppercase;
  margin-left: 4px;
  margin-top: 20px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 991px) {
    font-size: 24px;
    line-height: 22px;
  }
  @media screen and (max-width: 576px) {
    margin-top: 18px;
    /* margin-left: 14px; */
    position: relative;
    z-index: 5;
  }
  /* @media screen and (max-width: 414px) {
    margin-top: 18px;
    margin-left: 14px;
    position: relative;
    z-index: 5;
  } */
`
const StyledDescLeft = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #d4d4d4;
  margin-left: 6px;
  display: inline-block;
  max-width: 420px;

  @media screen and (max-width: 991px) {
    font-size: 16px;
    position: relative;
    z-index: 1;
    max-width: 100%;
  }
  /* @media screen and (max-width: 576px) {
    margin-left: 14px;
  } */
`

const StyledStakingTitleRight = styled.span`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  text-align: right;
  font-size: 77px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: 0;
  line-height: 80px;
  color: #6a9df9;
  text-shadow: 0px 3px 6px #163f8c, 0px 0px 98px #163f8c;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  margin-top: 135px;
  &::after {
    position: absolute;
    content: "";
    top: -14px;
    right: -16px;
    width: 44px;
    height: 179px;
    background: transparent linear-gradient(180deg, #163f8c 0%, #9e08a6 100%) 0%
      0% no-repeat padding-box;
    z-index: -1;
  }
  & span {
    position: relative;
  }
  & span::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 40px;
    background: #6294ef 0% 0% no-repeat padding-box;
    opacity: 1;
    filter: blur(39px);
    z-index: -1;
  }
  & span:nth-child(1)::before {
    width: 100%;
    top: 10px;
  }
  & span:nth-child(2)::before {
    width: 100%;
    top: 10px;
  }
  @media screen and (max-width: 991px) {
    font-size: 32px;
    line-height: 36px;
    & span::before {
      height: 15px;
      filter: blur(30px);
    }
  }
  @media screen and (max-width: 414px) {
    &:after {
      width: 20px;
      height: 85px;
      right: 0;
    }
    /* padding-right: 10px; */
  }
`
const StyledDescRight = styled.span`
  display: block;
  text-align: right;
  float: right;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #d4d4d4;
  margin-left: 100px;
  width: 520px;
  /* margin-right: -16px; */
  margin-top: 26px;
  @media screen and (max-width: 991px) {
    font-size: 16px;
    position: relative;
    z-index: 1;
    width: 100%;
  }
  @media screen and (max-width: 414px) {
    width: 397px;
    margin-right: 0;
  }
`
// test
const P = styled.p`
  letter-spacing: 0px;
  display: flex;
  opacity: 1;
  align-items: center;
  margin-bottom: 28px;
  @media (max-width: 1759px) {
    margin-bottom: 20px;
  }
  @media (max-width: 654px) {
    margin-bottom: 6px;
  }
`
const StyledUserTitle = styled(P)`
  position: relative;
  font: normal normal bold 77px/60px Whyte;
  color: #e740f0;
  text-transform: uppercase;
  height: 77px;
  @media screen and (max-width: 1759px) {
    font: normal normal bold 57px/40px Whyte;
  }
  @media screen and (max-width: 654px) {
    font: normal normal bold 32px/60px Whyte;
    height: 30px;
  }
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    max-width: 44px;
    height: 179px;
    left: -6px;
    top: -58px;
    background: linear-gradient(180deg, #163f8c 0%, #9e08a6 100%) 0% 0%
      no-repeat padding-box;
    @media screen and (max-width: 654px) {
      max-width: 20px;
      height: 88px;
      top: -40px;
    }
  }
  &::after {
    content: "";
    position: absolute;
    background: #e740f0 0% 0% no-repeat padding-box;
    filter: blur(50px);
    width: 100%;
    max-width: 728px;
    height: 45px;
    @media screen and (max-width: 1759px) {
      max-width: 550px;
    }
    @media screen and (max-width: 654px) {
      max-width: 300px;
      height: 24px;
    }
  }
`
const StyledSubUserTitle = styled(P)`
  font: normal normal normal 50px/22px Whyte;
  color: #ffffff;
  text-transform: uppercase;
  height: 50px;
  @media screen and (max-width: 1759px) {
    font: normal normal normal 40px/22px Whyte;
  }
  @media screen and (max-width: 654px) {
    font: normal normal normal 24px/22px Whyte;
    height: 24px;
  }
`
const StyledUserDescription = styled(P)`
  font: normal normal normal 20px/28px Whyte;
  color: #d4d4d4;
  @media screen and (max-width: 1759px) {
    font: normal normal normal 16px/28px Whyte;
  }
  @media screen and (max-width: 654px) {
    font: normal normal normal 12px/28px Whyte;
  }
`
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
            {/* <StyledUserTitle>STAKING &</StyledUserTitle>
            <StyledSubUserTitle>LIQUIDITY REWARDS</StyledSubUserTitle>
            <StyledUserDescription>
              Holders of the native STATE token will be able to stake or enter
              into liquidity pools to earn rewards. Early adopters acquiring one
              of the limited edition Quantum Accelerator NFTs get access to
              exclusive content, enhanced rewards and multiplier bonuses.
            </StyledUserDescription> */}
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
            <StyledImgNft image={StakingNftImage} height={1186} top="-100" />
          </Col>
        </Row>
        <Row className="mt-350">
          <Col lg={6}>
            <StyledImgNft
              image={StakingCupImage}
              height={780}
              // top="165"
              className="mt-200"
            />
          </Col>
          <StyledStakingColRight lg={6}>
            <StyledStakingTitleRight>
              <span>TOURNAMENT</span>
              <span>PRIZES</span>
            </StyledStakingTitleRight>
            <StyledDescRight>
              Gamestate will host community and partner-sponsored tournaments
              and events in the WAGMI stadium with prizes and incentives for the
              winners.
            </StyledDescRight>
          </StyledStakingColRight>
        </Row>
      </StyledStaking>
      <StyledContainerFluid />
    </>
  )
}

export default Staking
