import Button from '@mui/material/Button';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { history } from 'app';
import { Box, LinearProgress } from '@mui/material';

BuySuccess.propTypes = {};

function BuySuccess(props) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          history.push('/nft-all');
          return 0;
        }
        const diff = 3.3;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Main>
      <Container>
        <Row className="justify-content-center">
          <P>Your order is now complete! Thank you for your purchase.</P>
        </Row>
        <Row
          className="justify-content-center"
          style={{ marginBottom: '25px' }}
        >
          Quantum Accelerator metadata initiating, please wait...
        </Row>
        <Box sx={{ width: '50%', margin: 'auto' }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
        {/* <Button variant="contained" onClick={() => history.push('/nft-all')}>
          View wallet
        </Button> */}
      </Container>
    </Main>
  );
}

export default BuySuccess;

const Main = styled(Container)`
  color: #ffffff;
  padding-top: 160px;
  margin: 0 auto;
  text-align: center;
  max-width: 94%;
  @media (max-width: 564px) {
    padding-top: 90px;
  }
  .MuiLinearProgress-root {
    background-color: #fff;
  }
  .MuiLinearProgress-bar {
    background-color: #81efff;
  }
`;
const P = styled.p`
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  font-size: 35px;
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
