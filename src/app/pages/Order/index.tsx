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

const QuantumOrder = () => {
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

  return (
    <>
      <Header />
      <Main>
        <P>Quantum accelerator orders</P>
        {isLoading ? (
          <CircularProgress size={40} color="primary" />
        ) : (
          <Row className="justify-content-center">
            {data?.map((item, index) => {
              return (
                <StyledCol key={index} xs={6} sm={6} lg={3} xl={2}>
                  <QuantumItem />
                  <LabelPrice># {item}</LabelPrice>
                </StyledCol>
              );
            })}
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
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1200px) {
    margin: 0 19px 50px 19px;
  }
`;
