import Header from 'app/components/Navbar';
import styled from 'styled-components';
import QuantumItem from './components/QuantumItem';
import LabelPrice from './components/LabelPrice';
import { Container, Row, Col } from 'react-bootstrap';

const mockData = [
  {
    id: '#1111',
  },
  {
    id: '#1234',
  },
  {
    id: '#1515',
  },
  {
    id: '#5454',
  },
  {
    id: '#6435',
  },
  {
    id: '#5443',
  },
  {
    id: '#1545',
  },
  {
    id: '#1675',
  },
  {
    id: '#1100',
  },
  {
    id: '#1909',
  },
];
const QuantumOrder = () => {
  return (
    <>
      <Header />
      <Main>
        <P>Quantum accelerator orders</P>
        <Row className="justify-content-around">
          {mockData.map((item, index) => {
            return (
              <StyledCol key={index} xs={6} sm={6} lg={3} xl={2}>
                <QuantumItem />
                <LabelPrice>{item.id}</LabelPrice>
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
