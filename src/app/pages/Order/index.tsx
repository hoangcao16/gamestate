import Header from 'app/components/Navbar';
import styled from 'styled-components';

const QuantumOrder = () => {
  return (
    <>
      <Header />
      <Main>
        <P>Quantum accelerator orders</P>
      </Main>
    </>
  );
};

export default QuantumOrder;

const P = styled.p`
  color: #ffffff;
`;
const Main = styled.main`
  padding-top: 90px;
`;
