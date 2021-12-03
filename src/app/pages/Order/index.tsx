import Header from 'app/components/Navbar';
import styled from 'styled-components';
import QuantumItem from './components/QuantumItem';
import LabelPrice from './components/LabelPrice';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getTokenId } from 'services/walletService/nftService/getNft';
import Web3 from 'services/walletService/initWeb3';

const QuantumOrder = () => {
  const intanceValue = Web3.getInstance;
  const [data, setData] = useState<Array<any>>([]);
  const curAddress = JSON.parse(
    localStorage.getItem('StoreWallet')!,
  )?.currentAddress;
  useEffect(() => {
    if (localStorage.getItem('extensionName')) {
      (async () => {
        await intanceValue.setWeb3();
        const tokenId = await getTokenId(curAddress);
        setData(tokenId?.txData);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header />
      <Main>
        <P>Quantum accelerator orders</P>
        <Row className="justify-content-around">
          {data.map((item, index) => {
            return (
              <StyledCol key={index} xs={6} sm={6} lg={3} xl={2}>
                <QuantumItem />
                <LabelPrice># {item}</LabelPrice>
              </StyledCol>
            );
          })}
        </Row>
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
