import { Col, Container, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledMain = styled(Container)`
  margin-top: 90px;
`;
export const StyledQuantumItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* max-width: 800px; */
  margin: 30px auto;
  text-align: center;
  @media screen and (max-width: 575px) {
    max-width: unset;
  }
`;

export const ContainQuantumItem = styled.div`
  position: relative;
`;

export const StyledSaleOff = styled.img`
  position: absolute;
  left: 0px;
  z-index: 3;
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
  margin: 10px 0 15px;
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
  max-width: 800px;
  display: flex;
  width: 100%;
  margin: 10px auto 100px auto;
  @media screen and (max-width: 575px) {
    flex-direction: column;
    margin: 15px auto 100px auto;
  }
`;
export const StyledBuyItemVideo = styled.video`
  width: 100%;
  border-radius: 35px;
  display: flex;
`;

export const RowInputStyle = styled(Row)`
  // margin: 20px auto 20px auto;
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
  line-height: 0;
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
export const LinkScan = styled.span`
  cursor: pointer;
  text-decoration: underline;
  text-shadow: 0px 1px 2px #da87de, 0px 3px 6px #e740f0;
  color: #e740f0;
  position: relative;
  z-index: 99;
  &::before {
    content: '';
    position: absolute;
    background: #e740f0 0% 0% no-repeat padding-box;
    opacity: 0.5;
    filter: blur(41px);
    width: 100%;
    height: 28px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
