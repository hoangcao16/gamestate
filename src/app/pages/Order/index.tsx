import Header from 'app/components/Navbar';
import styled from 'styled-components';
import QuantumItem from './components/QuantumItem';
import LabelPrice from './components/LabelPrice';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useOrderNFTSlice } from './slice';
import { useApproveNFT } from 'app/pages/BuyQuantum/components/ApproveButton/slice';
import { orderNFTSelector } from './slice/selectors';
import { CircularProgress } from '@mui/material';
import { useHistory } from 'react-router';
import { selectWallet } from 'app/components/Wallet/slice/selectors';
import Button from '@mui/material/Button';
const QuantumOrder = () => {
  const handleLink = link => {
    history.push(link);
  };
  const history = useHistory();
  const curAddress = JSON.parse(
    localStorage.getItem('StoreWallet')!,
  )?.currentAddress;
  const dispatch = useDispatch();
  const { actions } = useOrderNFTSlice();
  const { actions: actionsApprove } = useApproveNFT();
  useEffect(() => {
    dispatch(actionsApprove.clearReceipt());
    dispatch(actions.orderNFTRequest(curAddress));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { data, isLoading } = useSelector(orderNFTSelector);

  const wallet: any = useSelector(selectWallet);

  useEffect(() => {
    !curAddress && !wallet?.wallet && history.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curAddress, wallet]);
  return (
    <>
      <Header />
      <Main>
        <P>My wallet</P>
        <CtnFilter>
          <Button
            id="basic-button"
            variant="outlined"
            style={{
              color: '#fff',
              width: '150px',
              marginRight: '10px',
              borderRadius: '24px',
            }}
            onClick={() => handleLink(`/nft-all`)}
          >
            All
          </Button>
          <Button
            id="basic-button"
            style={{
              background: '#e740f0',
              color: '#fff',
              width: '150px',
              borderRadius: '24px',
              marginRight: '10px',
            }}
            onClick={() => handleLink(`/utility`)}
          >
            Utility
          </Button>
          <Button
            id="basic-button"
            variant="outlined"
            style={{
              color: '#fff',
              width: '150px',
              borderRadius: '24px',
            }}
            onClick={() => handleLink(`/wearable`)}
          >
            Wearables
          </Button>
        </CtnFilter>
        {isLoading ? (
          <CircularProgress size={40} color="primary" />
        ) : (
          <Row className="justify-content-center">
            {data.length
              ? data?.map((item, index) => {
                  return (
                    <StyledCol
                      key={index}
                      xs={6}
                      sm={6}
                      lg={3}
                      xl={2}
                      onClick={() => history.push(`/nft/${item}`)}
                    >
                      <QuantumItem items={item} idx={index + 1} />
                      <LabelPrice># {item}</LabelPrice>
                    </StyledCol>
                  );
                })
              : ''}
          </Row>
        )}
      </Main>
    </>
  );
};

export default QuantumOrder;

const P = styled.p`
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  font-size: 60px;
  line-height: 60px;
  font-weight: bold;
  margin-bottom: 90px;
  @media screen and (max-width: 991px) {
    font-size: 40px;
  }
  @media screen and (max-width: 764px) {
    font-size: 30px;
  }
  @media screen and (max-width: 564px) {
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 50px;
  }
`;
const Main = styled(Container)`
  padding-top: 160px;
  margin: 0 auto;
  text-align: center;
  max-width: 94%;
  @media (max-width: 564px) {
    padding-top: 90px;
  }
`;
const StyledCol = styled(Col)`
  cursor: pointer;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1200px) {
    margin: 0 19px 50px 19px;
  }
`;
const CtnFilter = styled.div`
  text-align: left;
  margin-bottom: 30px;
  display: flex;
`;
