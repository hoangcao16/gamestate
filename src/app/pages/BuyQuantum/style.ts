import styled from 'styled-components';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Dialog } from '@mui/material';

export const StyledMain = styled(Container)`
  margin-top: 90px;
`;
export const StyledQuantumItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* max-width: 800px; */
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
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.mb-100 {
    margin-bottom: 100px;
  }
  @media screen and (max-width: 1199px) {
    width: 100%;
  }
`;
export const StyledGroupButton = styled.div`
  max-width: 1432px;
  display: flex;
  width: 100%;
  margin: 45px auto 100px auto;
  @media screen and (max-width: 575px) {
    flex-direction: column;
    margin: 10px auto 100px auto;
  }
`;
export const StyledBuyItemVideo = styled.video`
  width: 100%;
  border-radius: 42px;
  display: flex;
`;

export const RowInputStyle = styled(Row)`
  margin: 20px auto 20px auto;
  width: 50%;
  @media screen and (max-width: 575px) {
    margin: 20px auto 0px auto;
    width: 90%;
  }
`;

export const StyledColInput = styled(Col)`
  padding: 0 6px;
`;

export const StyledInput = styled(Form.Group)`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid transparent;
  font-size: 12px;
  line-height: 16px;
  color: #fff;
  position: relative;
  &:focus-within {
    border: 1px solid #e740f0;
  }
  & input,
  & textarea {
    background: transparent;
    border: none;
    font-size: 16px;
    line-height: 21px;
    font-style: normal;
    font-weight: 600;
    color: #fff;
    padding-left: 0;
    width: 90%;
    padding-top: 0px;
    padding-bottom: 0px;
    &:focus {
      background: transparent;
      color: #fff;
      outline: none;
      box-shadow: unset;
    }
  }

  & label {
    padding-left: 0 !important;
    border: none;
    opacity: 1 !important;
    width: 100%;
    resize: none;
    text-align: left;
  }
`;
