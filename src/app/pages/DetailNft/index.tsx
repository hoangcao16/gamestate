import Header from 'app/components/Navbar';
import styled from 'styled-components';
import { useEffect } from 'react';
import { ShortenWalletAddress } from 'utils/formatWalletAddress';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useOrderNFTSlice } from './slice';
import { useApproveNFT } from 'app/pages/BuyQuantum/components/ApproveButton/slice';
import { orderNFTSelector } from './slice/selectors';
import { CircularProgress } from '@mui/material';
import { useHistory } from 'react-router';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import background from './assets/img/Background.png';
import Path3728 from './assets/img/Path3728.png';
import attrItem1 from './assets/img/attrItem1.png';
import attrItem2 from './assets/img/attrItem2.png';
import attrItem3 from './assets/img/attrItem3.png';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { DatetimeFormat } from 'utils/formatTime';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

const ITEMS = [attrItem1, attrItem2, attrItem3];
const endpoint =
  'https://api.thegraph.com/subgraphs/name/qtvnnn/transaction-history';

const QuantumOrder = () => {
  let { id } = useParams<{ id: string }>();
  const { data: data2, isLoading: isLoading2 } = useQuery('launches', () => {
    return fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
      {
        transfers(orderBy: createdAtTimestamp, orderDirection: desc, where: { tokenID: "${id}" }) {
          id
          txn
          addressToken
          from
          to
          createdAtTimestamp
          tokenID
          transactionHash
        }
      }
    `,
      }),
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Error fetching data');
        } else {
          return response.json();
        }
      })
      .then(data => data.data);
  });
  const history = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const dispatch = useDispatch();
  const { actions } = useOrderNFTSlice();
  const { actions: actionsApprove } = useApproveNFT();
  useEffect(() => {
    (async () => {
      dispatch(actionsApprove.clearReceipt());
      dispatch(actions.orderNFTRequest(id));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data, isLoading } = useSelector(orderNFTSelector);

  return (
    <>
      <Header />
      <Main>
        <Row>
          <TopCol>
            <StyleBackBtn onClick={() => history.push(`/wearable`)}>
              <ArrowBackIosIcon /> Back
            </StyleBackBtn>
          </TopCol>
          <TopCol style={{ textAlign: 'right' }}>DETAILS</TopCol>
        </Row>
        {isLoading ? (
          <CircularProgress size={40} color="primary" />
        ) : (
          <ContainDetailNft>
            <Row>
              <Col md={4}>
                <NftImage>
                  <model-viewer
                    alt="3D NFT"
                    src={data.animation_url}
                    camera-controls
                    auto-rotate
                    style={{
                      width: '100%',
                      height: '100%',
                      background: '#fff',
                      // backgroundImage: `url(${attrItem1})`,
                      // backgroundSize: 'cover',
                      // backgroundRepeat: 'no-repeat',
                      // backgroundPosition: 'center',
                    }}
                  ></model-viewer>
                  {/* <img src={data.image} alt="logo" /> */}
                </NftImage>
              </Col>
              <Col md={8} className="right-detail">
                <CollectionNft>
                  <img
                    src={Path3728}
                    alt="logo"
                    style={{ marginRight: '10px' }}
                  />
                  <span>{data?.collection?.name}</span>
                </CollectionNft>
                <NftName>
                  <span className="txt-nft-name">{data.name}</span>
                  <span
                    className="txt-tx"
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      window.open(
                        'https://mumbai.polygonscan.com/address/' +
                          process.env.REACT_APP_NFT_DETAIL,
                        '_blank',
                      )
                    }
                  >
                    #{data.tokenid}
                  </span>
                </NftName>
                {matches ? <NftInfo>{data.description}</NftInfo> : ''}
                <NftProperties>
                  <PropertyItem>{data?.properties?.rarity}</PropertyItem>
                  <PropertyItem>{data?.properties?.collection}</PropertyItem>
                  <PropertyItem>{data?.properties?.category}</PropertyItem>
                  <PropertyItem>{data?.properties?.type}</PropertyItem>
                </NftProperties>
                {matches ? (
                  <NftAttributes>
                    <AttributeContain>
                      {data?.attributes?.map(item => (
                        <AttributeItem
                          bgimage={ITEMS[Math.floor(Math.random() * 3)]}
                        >
                          <span style={{ fontWeight: '600' }}>
                            {item.trait_type}
                          </span>
                          <span>{item.value}</span>
                        </AttributeItem>
                      ))}
                    </AttributeContain>
                  </NftAttributes>
                ) : (
                  ''
                )}
              </Col>
            </Row>
            {matches ? (
              <TransferHistory>
                <SectionHeaderAtrHis>
                  <span>History</span>
                </SectionHeaderAtrHis>
                <HeaderTable>
                  <Row>
                    <Col>Txn Hash</Col>
                    <Col>From</Col>
                    <Col>To</Col>
                    <Col>Date</Col>
                  </Row>
                </HeaderTable>
                <BodyTableTx>
                  {isLoading2 ? (
                    <CircularProgress size={40} color="primary" />
                  ) : (
                    data2?.transfers.map((item, i) => {
                      return (
                        <Row>
                          <Col
                            style={{
                              paddingTop: '5px',
                              paddingBottom: '5px',
                            }}
                          >
                            <StyleTxtLink
                              onClick={() =>
                                window.open(
                                  process.env.REACT_APP_TXT_DETAIL_URL +
                                    '/tx/' +
                                    item.transactionHash,
                                  '_blank',
                                )
                              }
                            >
                              <ShortenWalletAddress numShort={15}>
                                {item.transactionHash}
                              </ShortenWalletAddress>
                            </StyleTxtLink>
                          </Col>
                          <Col
                            style={{
                              paddingTop: '5px',
                              paddingBottom: '5px',
                            }}
                          >
                            <StyleTxtLink
                              onClick={() =>
                                window.open(
                                  process.env.REACT_APP_TXT_DETAIL_URL +
                                    '/address/' +
                                    item.from,
                                  '_blank',
                                )
                              }
                            >
                              <ShortenWalletAddress numShort={15}>
                                {item.from}
                              </ShortenWalletAddress>
                            </StyleTxtLink>
                          </Col>
                          <Col
                            style={{
                              paddingTop: '5px',
                              paddingBottom: '5px',
                            }}
                          >
                            <ShortenWalletAddress numShort={15}>
                              {item.to}
                            </ShortenWalletAddress>
                          </Col>
                          <Col
                            style={{
                              paddingTop: '5px',
                              paddingBottom: '5px',
                            }}
                          >
                            <DatetimeFormat format="HH:mm DD/MM/YYYY">
                              {item.createdAtTimestamp * 1000}
                            </DatetimeFormat>
                          </Col>
                        </Row>
                      );
                    })
                  )}
                </BodyTableTx>
              </TransferHistory>
            ) : (
              <>
                <TabsUnstyled defaultValue={0}>
                  <TabsList>
                    <Tab>Description</Tab>
                    <Tab>Attributes</Tab>
                    <Tab>History</Tab>
                  </TabsList>
                  <TabPanel value={0}>{data.description}</TabPanel>
                  <TabPanel value={1}>
                    <AttributeContainMoblie>
                      {data?.attributes?.map(item => (
                        <AttributeItem
                          bgimage={ITEMS[Math.floor(Math.random() * 3)]}
                        >
                          <span style={{ fontWeight: '600' }}>
                            {item.trait_type}
                          </span>
                          <span>{item.value}</span>
                        </AttributeItem>
                      ))}
                    </AttributeContainMoblie>
                  </TabPanel>
                  <TabPanel value={2}>
                    <BodyTableTxMobile>
                      {data2?.transfers.map((item, i) => {
                        return (
                          <RecordRowStyle>
                            <Row>
                              <Col xs={4}>Txn Hash</Col>
                              <Col xs={8}>
                                <StyleTxtLink
                                  onClick={() =>
                                    window.open(
                                      process.env.REACT_APP_TXT_DETAIL_URL +
                                        '/tx/' +
                                        item.transactionHash,
                                      '_blank',
                                    )
                                  }
                                >
                                  <ShortenWalletAddress numShort={20}>
                                    {item.transactionHash}
                                  </ShortenWalletAddress>
                                </StyleTxtLink>
                              </Col>
                            </Row>
                            <Row style={{ paddingTop: '5px' }}>
                              <Col xs={4}>From</Col>
                              <Col xs={8}>
                                <StyleTxtLink
                                  onClick={() =>
                                    window.open(
                                      process.env.REACT_APP_TXT_DETAIL_URL +
                                        '/address/' +
                                        item.from,
                                      '_blank',
                                    )
                                  }
                                >
                                  <ShortenWalletAddress numShort={20}>
                                    {item.from}
                                  </ShortenWalletAddress>
                                </StyleTxtLink>
                              </Col>
                            </Row>
                            <Row style={{ paddingTop: '5px' }}>
                              <Col xs={4}>To</Col>
                              <Col xs={8}>
                                <ShortenWalletAddress numShort={20}>
                                  {item.to}
                                </ShortenWalletAddress>
                              </Col>
                            </Row>
                            <Row style={{ paddingTop: '5px' }}>
                              <Col xs={4}>Date</Col>
                              <Col xs={8}>
                                <DatetimeFormat format="HH:mm DD/MM/YYYY">
                                  {item.createdAtTimestamp * 1000}
                                </DatetimeFormat>
                              </Col>
                            </Row>
                          </RecordRowStyle>
                        );
                      })}
                    </BodyTableTxMobile>
                  </TabPanel>
                </TabsUnstyled>
              </>
            )}
          </ContainDetailNft>
        )}
      </Main>
    </>
  );
};

export default QuantumOrder;

const Tab = styled(TabUnstyled)`
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

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

const Main = styled(Container)`
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
const TopCol = styled(Col)`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 600;
`;
const StyleBackBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const ContainDetailNft = styled.div`
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
const NftImage = styled.div`
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
const CollectionNft = styled.div`
  color: #81efff;
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;
const NftName = styled.div`
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
const NftInfo = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  @media (max-width: 1366px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;
const NftProperties = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const PropertyItem = styled.div`
  background: #34425d;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 3.5px 24px;
`;
const NftAttributes = styled.div`
  margin-top: 5px;
  @media (max-width: 1366px) {
    margin-top: 20px;
  }
`;
const SectionHeaderAtrHis = styled.div`
  padding: 10px 16px;
  color: #81efff;
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 1240px) {
    padding: 6px 16px;
    font-size: 20px;
  }
`;
const AttributeContain = styled.div`
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
const AttributeItem = styled.div<{
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
const TransferHistory = styled.div`
  margin-top: 8px;
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
const HeaderTable = styled.div`
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
const BodyTableTx = styled.div`
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
const StyleTxtLink = styled.div`
  cursor: pointer;
`;
const BodyTableTxMobile = styled.div``;
const RecordRowStyle = styled.div`
  padding: 16px 10px;
  border-bottom: 1px solid #81efff;
`;
const AttributeContainMoblie = styled.div`
  grid-template-columns: auto auto;
  display: grid;
  justify-items: start;
  @media (max-width: 912px) {
    grid-template-columns: auto auto auto;
    justify-items: center;
  }
`;
