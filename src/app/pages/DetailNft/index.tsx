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
              <Col md={8} style={{ padding: '0px 25px' }}>
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
                  <span className="txt-tx">#{data.tokenid}</span>
                </NftName>
                <NftInfo>{data.description}</NftInfo>
                <NftProperties>
                  <PropertyItem>{data?.properties?.rarity}</PropertyItem>
                  <PropertyItem>{data?.properties?.collection}</PropertyItem>
                  <PropertyItem>{data?.properties?.category}</PropertyItem>
                  <PropertyItem>{data?.properties?.type}</PropertyItem>
                </NftProperties>
                <NftAttributes>
                  <SectionHeaderAtr>
                    <span>ATTRIBUTES</span>
                  </SectionHeaderAtr>
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
              </Col>
            </Row>
            <TransferHistory>
              <SectionHeaderAtrHis>
                <span>TRANSFER HISTORY</span>
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
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
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
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
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
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
                        >
                          <ShortenWalletAddress numShort={15}>
                            {item.to}
                          </ShortenWalletAddress>
                        </Col>
                        <Col
                          style={{ paddingTop: '5px', paddingBottom: '5px' }}
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
          </ContainDetailNft>
        )}
      </Main>
    </>
  );
};

export default QuantumOrder;

const Main = styled(Container)`
  padding-top: 160px;
  margin: 0 auto;
  max-width: 85%;
  font-weight: 300;
  @media (max-width: 1366px) {
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
  @media (max-width: 1366px) {
    background-size: contain;
    background-position: top;
    padding: 44px 50px;
  }
  @media (max-width: 480px) {
    background-image: none;
    padding: 0;
  }
  @media (min-width: 2560px) {
    padding: 7%;
  }
  @media (min-width: 1440px) {
    padding: 168px 50px;
  }
`;
const NftImage = styled.div`
  width: 476px;
  height: 476px;
  border: 6px solid #81efff;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    max-width: 100%;
    max-height: 100%;
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
  border: 5px solid #81efff;
  margin-top: 41px;
  @media (max-width: 1366px) {
    margin-top: 20px;
  }
`;
const SectionHeaderAtr = styled.div`
  background: #335a72;
  // opacity: 0.8;
  padding: 10px 16px;
  font-size: 18px;
  font-weight: 500;
`;
const SectionHeaderAtrHis = styled.div`
  background: #335a72;
  // opacity: 0.8;
  padding: 10px 16px;
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 480px) {
    width: 1050px;
  }
`;
const AttributeContain = styled.div`
  padding-top: 20px;
  grid-template-columns: auto auto auto;
  display: grid;
  justify-items: center;
  height: 189px;
  overflow: auto;
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
  @media (max-width: 1366px) {
    padding-top: 16px;
    height: 160px;
  }
  @media (max-width: 1440px) {
    height: 130px;
  }
`;
const AttributeItem = styled.div<{
  bgimage: string;
}>`
  background-image: url(${props => props.bgimage});
  background-size: cover;
  background-position: center;
  width: 198px;
  height: 143px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  @media (max-width: 1366px) {
    padding-bottom: 16px;
    width: 180px;
    height: 130px;
  }
  @media (max-width: 480px) {
    margin-right: 16px;
    margin-left: 16px;
  }
`;
const TransferHistory = styled.div`
  margin-top: 30px;
  border: 5px solid #81efff;
  @media (max-width: 1366px) {
    margin-top: 25px;
  }
  @media (max-width: 480px) {
    display: block;
    width: 100%;
    overflow-x: auto;
  }
`;
const HeaderTable = styled.div`
  font-size: 20px;
  padding: 12px 40px;
  background: rgb(129, 239, 255, 0.19);
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
  height: 305px;
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
  @media (max-width: 1366px) {
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
`;
const StyleTxtLink = styled.div`
  cursor: pointer;
`;
