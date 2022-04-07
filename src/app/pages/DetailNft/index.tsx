// import Header from 'app/components/Navbar';
import { useEffect, useState } from 'react';
import { ShortenWalletAddress } from 'utils/formatWalletAddress';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useOrderNFTSlice } from './slice';
import { useApproveNFT } from 'app/pages/BuyQuantum/components/ApproveButton/slice';
import { orderNFTSelector } from './slice/selectors';
import { CircularProgress, Popover } from '@mui/material';
import { useHistory } from 'react-router';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
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
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ShareIcon from '@mui/icons-material/Share';
import {
  Tab,
  TabPanel,
  TabsList,
  Main,
  TopCol,
  StyleBackBtn,
  ContainDetailNft,
  NftImage,
  CollectionNft,
  NftName,
  NftInfo,
  NftProperties,
  PropertyItem,
  NftAttributes,
  SectionHeaderAtrHis,
  AttributeContain,
  AttributeItem,
  TransferHistory,
  HeaderTable,
  BodyTableTx,
  StyleTxtLink,
  BodyTableTxMobile,
  RecordRowStyle,
  AttributeContainMoblie,
  ContainIcon,
  InfoShareLink,
  LinkScan,
} from './assets/style';
import DfyBlockchainInformation from 'app/components/DfyBlockchainInformation';
import ShareMenu from 'app/components/ShareMenu';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

const endpoint =
  'https://api.thegraph.com/subgraphs/name/qtvnnn/transaction-history';

const QuantumOrder = () => {
  const ITEMS = [attrItem1, attrItem2, attrItem3];
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

  const [anchorEl, setAnchorEl] = useState(null);
  const [shareAnchorEl, setShareAnchorEl] = useState<Element | null>(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const idPopup = open ? 'simple-popover' : undefined;

  const randomBgAttr = index => {
    return ITEMS[index % 3];
  };

  return (
    <>
      {/* <Header /> */}
      <Main>
        <Row>
          <TopCol>
            <StyleBackBtn onClick={() => history.push(`/nft-all`)}>
              <ArrowBackIosIcon /> Back
            </StyleBackBtn>
          </TopCol>
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
                <Row style={{ alignItems: 'center' }}>
                  <Col>
                    <CollectionNft>
                      <img
                        src={Path3728}
                        alt="logo"
                        style={{ marginRight: '10px' }}
                      />
                      <span>{data?.collection?.name}</span>
                    </CollectionNft>
                  </Col>
                  <Col>
                    <InfoShareLink>
                      <ContainIcon
                        aria-describedby={idPopup}
                        onClick={handleClick}
                      >
                        <InfoOutlinedIcon></InfoOutlinedIcon>
                      </ContainIcon>

                      <ContainIcon
                        onClick={e => setShareAnchorEl(e.currentTarget)}
                      >
                        <ShareIcon></ShareIcon>
                      </ContainIcon>
                      <LinkScan
                        className="txt-tx"
                        onClick={() =>
                          window.open(
                            'https://polygonscan.com/address/' +
                              process.env.REACT_APP_NFT_DETAIL,
                            '_blank',
                          )
                        }
                      >
                        # {id}
                      </LinkScan>
                    </InfoShareLink>
                  </Col>
                </Row>

                <NftName>
                  <span className="txt-nft-name">{data.name}</span>
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
                      {data?.attributes?.map((item, index) => (
                        <AttributeItem
                          style={{
                            backgroundImage: `url(${randomBgAttr(index)})`,
                          }}
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
                                  process.env.REACT_APP_TXT_DETAIL_URL_MAINNET +
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
                                  process.env.REACT_APP_TXT_DETAIL_URL_MAINNET +
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
                      {data?.attributes?.map((item, index) => (
                        <AttributeItem
                          style={{
                            backgroundImage: `url(${randomBgAttr(index)})`,
                          }}
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
                                      process.env
                                        .REACT_APP_TXT_DETAIL_URL_MAINNET +
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
                                      process.env
                                        .REACT_APP_TXT_DETAIL_URL_MAINNET +
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
        <Popover
          id={idPopup}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          sx={{
            display: { md: 'block' },

            '& .MuiPaper-root': {
              background: 'none',
              boxShadow: 'none',
            },
          }}
        >
          <DfyBlockchainInformation
            collectionAddress={process.env.REACT_APP_NFT_DETAIL}
            nftTokenId={id}
            nftStandard={`ERC-721`}
            blockchainNetwork={80001}
            metadata={'https://api.gamestate.one/api/token-metadata/wearable/1'}
          />
        </Popover>

        <Popover
          open={Boolean(shareAnchorEl)}
          anchorEl={shareAnchorEl}
          onClose={() => setShareAnchorEl(null)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          sx={{
            '& .MuiPaper-root': {
              background: 'none',
              boxShadow: 'none',
            },
          }}
        >
          <ShareMenu />
        </Popover>
      </Main>
    </>
  );
};

export default QuantumOrder;
