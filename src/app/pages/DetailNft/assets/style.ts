import styled from 'styled-components';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Container, Col } from 'react-bootstrap';
import background from './img/Background-2.png';

export const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 8px;
  margin: 6px 6px;
  border: none;
  display: flex;
  justify-content: center;

  &.${tabUnstyledClasses.selected} {
    color: #81efff;
    border-bottom: 1px solid #81efff;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

export const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export const Main = styled(Container)`
  padding-top: 160px;
  margin: 0 auto;
  max-width: 85%;
  font-weight: 300;
  @media (max-width: 1570px) {
    padding-top: 90px;
    max-width: 95%;
    font-size: 14px;
  }
`;
export const TopCol = styled(Col)`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 600;
`;
export const StyleBackBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const ContainDetailNft = styled.div`
  color: #ffffff;
  background-image: url(${background});
  min-height: 1058px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 12% 66px;
  margin-bottom: 40px;
  .right-detail {
    padding: 0px 25px;
  }
  @media (max-width: 1570px) {
    background-size: contain;
    background-position: top;
    padding: 44px 50px;
  }
  @media (max-width: 480px) {
    background-image: none;
    padding: 0;
    .right-detail {
      padding: 0px 12px;
    }
  }
  @media (max-width: 912px) {
    background-image: none;
    padding: 0;
    .right-detail {
      padding: 0px 12px;
    }
  }
  @media (max-width: 1140px) {
    background-image: none;
    padding: 0;
    .right-detail {
      padding: 0px 12px;
    }
  }
  @media (min-width: 2560px) {
    padding: 140px 150px !important;
  }
  // @media (min-width: 1440px) {
  //   padding: 210px 50px;
  // }
`;
export const NftImage = styled.div`
  width: 476px;
  height: 476px;
  border: 3px solid #81efff;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    max-width: 100%;
    max-height: 100%;
  }
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
  @media (max-width: 1366px) {
    width: 100%;
    height: 384px;
  }
  @media (max-width: 1800px) {
    width: 100%;
    height: 384px;
  }
  @media (min-width: 2560px) {
    width: 100%;
    height: 545px;
  }
`;
export const CollectionNft = styled.div`
  color: #81efff;
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;
export const NftName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .txt-nft-name {
    font-size: 50px;
    text-transform: uppercase;
  }
  .txt-tx {
    font-size: 20px;
    text-decoration: underline;
  }
  @media (max-width: 480px) {
    margin-bottom: 10px;
    .txt-nft-name {
      font-size: 20px !important;
    }
  }
  @media (max-width: 1366px) {
    .txt-nft-name {
      font-size: 40px;
    }
    .txt-tx {
      font-size: 16px;
      text-decoration: underline;
    }
  }
  @media (min-width: 1440px) {
    .txt-nft-name {
      font-size: 40px;
    }
    .txt-tx {
      font-size: 16px;
      text-decoration: underline;
    }
  }
`;
export const NftInfo = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  @media (max-width: 1366px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;
export const NftProperties = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const PropertyItem = styled.div`
  background: #34425d;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 3.5px 24px;
`;
export const NftAttributes = styled.div`
  margin-top: 5px;
  @media (max-width: 1366px) {
    margin-top: 20px;
  }
`;
export const SectionHeaderAtrHis = styled.div`
  padding: 10px 16px;
  color: #81efff;
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 1240px) {
    padding: 6px 16px;
    font-size: 20px;
  }
`;
export const AttributeContain = styled.div`
  padding-top: 20px;
  grid-template-columns: auto auto auto auto;
  display: grid;
  justify-items: start;
  // height: 189px;
  // overflow: auto;
  width: 99.5%;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    // background-color: #f5f5f5;
    border-radius: 10px;
    height: 90%;
  }

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 10px;
    // background-color: #f5f5f5;
    height: 90%;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    height: 40%;
    background: #81efff;
  }
  @media (max-width: 480px) {
    height: 162px !important;
  }
  @media (max-width: 1366px) {
    padding-top: 16px;
    // height: 160px;
  }
  @media (max-width: 1440px) {
    padding-top: 10px;
  }
  @media (min-width: 2560px) {
    grid-template-columns: auto auto auto auto auto;
  }
`;
export const AttributeItem = styled.div<{
  bgimage: string;
}>`
  background-image: url(${props => props.bgimage});
  background-size: cover;
  background-position: center;
  width: 180px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  @media (max-width: 1440px) {
    width: 146px;
    font-size: 12px;
    height: 105px;
  }
  @media (max-width: 1570px) {
    // padding-bottom: 16px;
    width: 146px;
    height: 105px;
    font-size: 12px;
  }
  @media (max-width: 480px) {
    padding-bottom: 0 !important;
    margin-right: 16px;
    margin-left: 16px;
  }
  @media (max-width: 1240px) {
    width: 125px;
    height: 91px;
    font-size: 11px;
  }
`;
export const TransferHistory = styled.div`
  // margin-top: 8px;
  // border: 3px solid #81efff;
  @media (max-width: 1366px) {
    // margin-top: 25px;
  }
  @media (max-width: 480px) {
    display: block;
    // width: 100%;
    // overflow-x: auto;
  }
  @media (min-width: 1440px) {
    margin-top: 0;
  }
`;
export const HeaderTable = styled.div`
  font-size: 20px;
  border: 1px solid #81efff;
  padding: 12px 40px;
  background: #26656e;
  border-radius: 10px;
  @media (max-width: 1366px) {
    font-size: 18px;
    padding: 10px 40px;
  }
  @media (max-width: 480px) {
    width: 1050px;
  }
`;
export const BodyTableTx = styled.div`
  font-size: 20px;
  padding: 5px 40px;
  width: 99.5%;
  height: 250px;
  overflow: auto;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    // background-color: #f5f5f5;
    border-radius: 10px;
    height: 90%;
  }

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 10px;
    // background-color: #f5f5f5;
    height: 90%;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    height: 40%;
    background: #81efff;
  }
  @media (max-width: 1570px) {
    font-size: 18px;
    padding: 10px 16px;
    height: 160px;
  }
  @media (max-width: 480px) {
    width: 1050px;
  }
  @media (max-width: 1800px) {
    height: 120px;
  }
  @media (min-width: 2560px) {
    height: 400px;
  }
  @media (min-width: 1440px) {
    padding: 8px 16px;
  }
  @media (max-width: 1240px) {
    padding: 6px 16px;
    font-size: 16px;
    height: 100px;
  }
`;
export const StyleTxtLink = styled.div`
  cursor: pointer;
`;
export const BodyTableTxMobile = styled.div``;
export const RecordRowStyle = styled.div`
  padding: 16px 10px;
  border-bottom: 1px solid #81efff;
`;
export const AttributeContainMoblie = styled.div`
  grid-template-columns: auto auto;
  display: grid;
  justify-items: start;
  @media (max-width: 912px) {
    grid-template-columns: auto auto auto;
    justify-items: center;
  }
`;
export const ContainIcon = styled.div`
  background: #30323e;
  padding: 10px;
  border-radius: 10px;
  margin-right: 10px;
  height: 44.63px;
  cursor: pointer;
`;
export const InfoShareLink = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const LinkScan = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #fff;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
`;
