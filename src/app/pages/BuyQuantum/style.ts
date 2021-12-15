import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';

export const StyledMain = styled(Container)`
  margin-top: 90px;
`;
export const StyledQuantumItem = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 60px auto;
  text-align: center;
  @media screen and (max-width: 575px) {
    max-width: unset;
  }
`;
export const StyledTitle = styled.h3`
  font-size: 60px;
  font-weight: bold;
  line-height: 60px;
  letter-spacing: 0px;
  color: #ffffff;
  @media screen and (max-width: 575px) {
    font-size: 24px;
    font-weight: bold;
    line-height: 60px;
  }
`;
export const StyledDesc = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.7;
  margin: 34px 0 55px;
  @media screen and (max-width: 575px) {
    font-size: 14px;
    font-weight: bold;
    line-height: 24px;
    margin-top: 0px;
  }
`;
export const StyledButton = styled.div`
  margin-top: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledGroupButton = styled.div`
  display: flex;
  width: 100%;
  margin: 90px auto 0 auto;
  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`;
