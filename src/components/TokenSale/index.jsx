import styled from "styled-components"
import CoinBackground from "../../assets/img/TokenSale/coinbackground.png"
import UserGenerated from "../../assets/img/TokenSale/User-generated.png"
import TokenBackground from "../../assets/img/TokenSale/token.png"
import HiveLogo from "../../assets/img/TokenSale/hivelogo.png"
import PolygonLogo from "../../assets/img/TokenSale/polygonlogo.png"
import { Container } from "react-bootstrap"
import Countdown, { zeroPad } from "react-countdown"
const Rendered = ({ days, hours, minutes, seconds }) => (
  <div className="countdown">
    <div className="countdown__group">
      <div className="countdown__item">
        <span className="countdown__time">{zeroPad(days)}</span>
        <span className="countdown__label">Days</span>
      </div>
      <div className="countdown__item">
        <span className="countdown__time">{zeroPad(hours)}</span>
        <span className="countdown__label">Hours</span>
      </div>
    </div>
    <div className="countdown__group">
      <div className="countdown__item">
        <span className="countdown__time">{zeroPad(minutes)}</span>
        <span className="countdown__label">Minutes</span>
      </div>
      <div className="countdown__item">
        <span className="countdown__time">{zeroPad(seconds)}</span>
        <span className="countdown__label">Seconds</span>
      </div>
    </div>
  </div>
)
const TokenSale = () => {
  return (
    <Div>
      <StyledTokenSales>
        <div className="title-main">
          <StyledTitle>Token</StyledTitle>
          <StyledSubTitle>Sale</StyledSubTitle>
        </div>
        <StyledBar>
          <HiveProgessBar fluid>
            <Bar>
              <img src={HiveLogo} alt="Hive Logo" />
              <span className="title">HIVE-ENGINE IDO</span>
              <Countdown
                date={new Date("Nov 25 2021").getTime()}
                renderer={Rendered}
              />
            </Bar>
          </HiveProgessBar>
          <PolygonProgessBar fluid>
            <Bar>
              <img src={PolygonLogo} alt="Polygon Logo" />
              <span className="title">Polygon IDO</span>
              <Countdown
                date={new Date("Dec 7 2021").getTime()}
                renderer={Rendered}
              />
            </Bar>
          </PolygonProgessBar>
        </StyledBar>
        <StyledButton>
          <a href="/#" onClick={(e) => e.preventDefault()}>
            Read more
          </a>
        </StyledButton>
        <StyledTokenImage src={TokenBackground} alt="Token Background" />
        <StyledUserGenerated src={UserGenerated} alt="User" />
      </StyledTokenSales>
    </Div>
  )
}

const Div = styled.div`
  /* background: url(${CoinBackground}) no-repeat; */
  background-position: top center;
  background-size: cover;
`
const StyledTokenSales = styled(Container)`
  position: relative;
  text-align: center;
  /* padding-top: 100px; */
  padding-top: 40px;
  padding-bottom: 220px;
  & .title-main {
    margin-top: 118px;
  }
  @media screen and (max-width: 991px) {
    padding-top: 42px;
    padding-bottom: 160px;
    & .title-main {
      margin-top: 10px;
      margin-bottom: 107px;
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 94%;
  }
`
const Title = styled.span`
  font: normal normal bold 77px/60px Whyte;
  letter-spacing: 0px;
  text-transform: uppercase;
  opacity: 1;
  @media screen and (max-width: 991px) {
    font: normal normal bold 46px/60px Whyte;
  }
  @media (max-width: 768px) {
    font: normal normal bold 32px/60px Whyte;
  }
`
const StyledTitle = styled(Title)`
  color: #6a9df9;
  padding-right: 20px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background: #4e7fd6 0% 0% no-repeat padding-box;
    opacity: 1;
    filter: blur(41px);
    width: 100%;
    max-width: 278px;
    height: 33px;
    @media screen and (max-width: 991px) {
      height: 22px;
      top: 0px;
    }
  }
`
const StyledSubTitle = styled(Title)`
  color: #e740f0;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background: #e740f0 0% 0% no-repeat padding-box;
    opacity: 1;
    filter: blur(41px);
    width: 100%;
    max-width: 278px;
    height: 33px;
    @media screen and (max-width: 991px) {
      height: 22px;
      top: 0px;
    }
  }
`
const StyledTokenImage = styled.img`
  position: absolute;
  top: 150px;
  right: -200px;
  max-width: 664px;
  max-height: 566px;
  z-index: -10;
`
const StyledUserGenerated = styled.img`
  position: absolute;
  display: block;
  left: -60px;
  bottom: 0;
  width: 106%;
  max-height: 211px;
  animation: linear infinite;
  -webkit-animation: linear infinite;
  -moz-animation: linear infinite;
  -o-animation: linear infinite;
  animation-name: run;
  animation-duration: 40s;
  @keyframes run {
    0% {
      left: -60px;
    }
    50% {
      left: 50%;
    }
    100% {
      left: -60px;
    }
  }
`

const StyledBar = styled.div`
  margin-top: 63px;
`
const ProgessBar = styled(Container)`
  background: #262626 0% 0% no-repeat padding-box;
  margin: 0 auto;
  border-radius: 13px;
  opacity: 1;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  max-width: 60%;
  /* height: 122px; */
  min-height: 157px;
  @media screen and (max-width: 1600px) {
    max-width: 80%;
  }
  @media screen and (max-width: 1400px) {
    max-width: unset;
  }
`
const HiveProgessBar = styled(ProgessBar)`
  margin-bottom: 60px;
  display: flex;
  .progessBar-fill-inner {
    background-color: #ff0000;
    width: 50%;
  }
`
const PolygonProgessBar = styled(ProgessBar)`
  display: flex;
  .progessBar-fill-inner {
    background-color: #1969ff;
    width: 35%;
  }
`
const Bar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  img {
    margin-left: 30px;
    margin-right: 24px;
    @media (max-width: 1199px) {
      width: 36px;
      margin-left: 20px;
      margin-right: 16px;
    }
  }
  .title {
    font: normal normal normal 24px/32px Whyte;
    letter-spacing: 0px;
    color: #ffffff;
    text-transform: uppercase;
    opacity: 1;
    margin-right: 22px;
    min-width: 212px;
    @media (max-width: 1199px) {
      font: normal normal normal 20px/28px Whyte;
      min-width: 180px;
    }
  }
  .countdown {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    padding: 19px;
    margin-left: -10px;
    &__group {
      display: flex;
    }
    &__item {
      display: flex;
      align-items: center;
      flex-direction: column;
      /* width: calc(25% - 10px); */
      max-width: 123px;
      margin-left: 30px;
      background: #13151f 0% 0% no-repeat padding-box;
      border-radius: 16px;
      padding: 25px 40px;
    }
    &__time {
      font: normal normal bold 42px/50px Whyte;
      letter-spacing: 0px;
      color: #ffffff;
    }
    &__label {
      font: normal normal normal 17px/20px Whyte;
      letter-spacing: 0px;
      color: #d9d9d9;
    }
    @media screen and (max-width: 919px) {
      flex-direction: column;
      margin-left: 0;
    }
  }
  @media screen and (max-width: 991px) {
    flex-direction: column;
    & img {
      margin-top: 27px;
      margin-bottom: 24px;
    }
    & .title {
      margin-right: 0;
      text-align: center;
    }
    & .countdown {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      &__group {
        width: 100%;
        justify-content: center;
      }
      &__item {
        margin: 17px 15px;
      }
    }
  }
`

const StyledButton = styled.button`
  min-width: 160px;
  margin-top: 60px;
  background-color: transparent;
  border: 3px solid #ffffff;
  box-shadow: 0px 0px 6px 4px #ffffff;
  border-radius: 48px;
  a {
    color: #ffffff;
    text-shadow: 2px 4px 6px #ffffffbe;
    font: normal normal normal 18px/60px Whyte;
    text-decoration: none;
    text-transform: uppercase;
  }
  @media screen and (max-width: 654px) {
    min-width: 140px;
    a {
      font: normal normal normal 14px/50px Whyte;
    }
  }
  @media screen and (max-width: 427px) {
    min-width: 100px;
    a {
      font: normal normal normal 12px/40px Whyte;
    }
  }
`
export default TokenSale
