import styled from 'styled-components';
import { Col, Container } from 'react-bootstrap';
import StakingGrid from 'app/assets/img/Staking/stakingGrid.png';
import StakingUnifiled from 'app/assets/img/Staking/stakingUnifiled.png';
import Video from '../Video';

export const StyledContainerFluid = styled.div`
  background-image: url(${StakingGrid});
  @media screen and (max-width: 991px) {
    position: relative;
    &:after {
      content: '';
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
`;
export const StyledStaking = styled(Container)`
  min-height: 1247px;
  .mt-156 {
    padding-top: 156px;
  }
  .mt-350 {
    margin-top: -350px;
    @media screen and (max-width: 991px) {
      margin-top: 0;
    }
    @media screen and (max-width: 767px) {
      margin-top: -182px;
    }
  }
  @media screen and (max-width: 767px) {
    .mt-156 {
      padding-top: 0;
    }
    .mt-170 {
      margin-top: -500px;
    }
  }
  @media screen and (max-width: 500px) {
    margin-top: -150px;
  }
`;
export const StyledStakingColLeft = styled(Col)`
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
`;
export const StyledStakingColRight = styled(Col)`
  padding-right: 146px;
  @media screen and (max-width: 1399px) {
    padding-right: 0;
  }
  @media screen and (max-width: 576px) {
    padding-right: 20px;
  }
`;
export const StyledStakingTitleLeft = styled.p`
  font-size: 77px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: 0;
  /* line-height: 60px; */
  color: #e740f0;
  text-shadow: 0px 3px 6px #9e08a6, 0px 0px 98px #e740f0c4;
  text-transform: uppercase;
  position: relative;
  z-index: 20;
  margin-top: 135px;
  margin-left: 4px;
  display: inline-block;
  color: transparent;
  /* text-shadow: 0 0 4px rgba(231, 64, 240, 0.77), 0 3px 6px #e13beb; */
  -webkit-text-stroke: 1px #e740f0;
  text-shadow: 0 0 98px #e740f0c4, 0 1px 3px #e13beb;

  &::before {
    position: absolute;
    content: '';
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
    content: '';
    top: 30px;
    left: 0;
    width: 100%;
    height: 40px;
    background: #e740f0 0% 0% no-repeat padding-box;
    filter: blur(41px);
    z-index: 19;
  }
  @media screen and (max-width: 991px) {
    /* margin-top: -160px; */

    font-size: 32px;
    line-height: 36px;
    &:after {
      top: 10px;
      left: 0;
      width: 100%;
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
    &:after {
      filter: unset;
      /* width: 69%; */
      z-index: -1;
      height: 0;
      box-shadow: 0px 5px 28px 8px #e740f0;
    }
  }
`;
export const StyledImgNft = styled.div<{ image: string; height: number }>`
  background-image: url(${props => props.image});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: ${props => props.height}px;

  @media screen and (max-width: 767px) {
    &.mt-200 {
      /* margin-top: -200px; */
      margin-bottom: -200px;
    }
  }
`;
export const StyledTitleLeft = styled.p`
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
  z-index: 20;

  @media screen and (max-width: 991px) {
    font-size: 24px;
    line-height: 30px;
  }
  @media screen and (max-width: 576px) {
    margin-top: 18px;
    /* margin-left: 14px; */
    position: relative;
    z-index: 5;
  }
`;
export const StyledDescLeft = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #d4d4d4;
  margin-left: 6px;
  display: inline-block;
  max-width: 420px;
  z-index: 50;
  @media screen and (max-width: 991px) {
    font-size: 16px;
    position: relative;
    max-width: 100%;
  }
`;

export const StyledStakingTitleRight = styled.span`
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
  text-shadow: 0px 3px 6px #163f8c, 0px 0px 98px #3178ff;
  text-transform: uppercase;
  position: relative;
  z-index: 50;
  margin-top: 135px;
  &::after {
    position: absolute;
    content: '';
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
    color: transparent;
    -webkit-text-stroke: 1px #3178ff;
    text-shadow: 0px 1px 3px #4785f9, 0px 0px 7px #163f8c;
  }
  & span::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 40px;
    background: #6294ef 0% 0% no-repeat padding-box;
    opacity: 1;
    filter: blur(39px);

    @media screen and (max-width: 576px) {
      filter: unset;
      /* width: 69%; */
      z-index: -1;
      height: 0;
      box-shadow: 0px 5px 28px 8px #6294ef;
      z-index: -1;
    }
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
    &:after {
      right: -8px;
    }
  }
  @media screen and (max-width: 576px) {
    & span::before {
      filter: unset;
      /* width: 69%; */
      z-index: -1;
      height: 0;
      box-shadow: 0px 5px 28px 8px #6294ef;
      z-index: -1;
    }
  }
  @media screen and (max-width: 414px) {
    &:after {
      width: 20px;
      height: 85px;
      /* right: 0; */
    }
    /* padding-right: 10px; */
  }
`;
export const StyledDescRight = styled.span`
  display: block;
  text-align: right;
  float: right;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #d4d4d4;
  margin-left: 100px;
  z-index: 50;
  /* width: 520px; */
  /* margin-right: -16px; */
  margin-top: 26px;
  @media screen and (max-width: 991px) {
    font-size: 16px;
    position: relative;
    /* z-index: 1; */
    width: 100%;
  }
  @media screen and (max-width: 414px) {
    margin-right: 0;
  }
`;
export const StyledVideo = styled(Video)`
  width: 100%;
  box-shadow: 0px 0px 8px #f8f8f8, 0px 0px 24px #db5289, 0px 0px 15px #e7e5ec,
    inset 0px 0px 5px #dadada;
  border-radius: 20px;
  & video {
    box-shadow: 0px 0px 8px #f8f8f8, 0px 0px 24px #db5289, 0px 0px 15px #e7e5ec,
      inset 0px 0px 5px #dadada;
    border-radius: 20px;
  }
`;
