import styled from 'styled-components';
import close from 'app/assets/img/close.png';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

export const A = styled.a`
  text-align: center;
  margin-left: 50px;
  font-weight: 500;
  font-size: 16px;
  line-height: 36px;
  border-radius: 24px;
  cursor: pointer;
  text-decoration: none;
  min-width: 148px;
  max-width: 150px;
  transition: 0.2s;
  height: 41px;
  @media screen and (min-width: 992px) and (max-width: 1310px) {
    font-weight: 500;
    font-size: 12px;
    line-height: 36px;
    min-width: 100px;
    margin-left: 30px;
  }
  @media (max-width: 991px) {
    min-width: 148px;
    margin-bottom: 22px;
    margin-left: 0;
  }
  @media (max-width: 414px) {
    min-width: 148px;
    margin-bottom: 50px;
    margin-left: 0;
  }
`;
export const StyledFirstButton = styled(A)`
  color: #81efff;
  margin-left: 0;
  border: 3px solid #81efff;
  box-shadow: 0px 0px 6px #406ef8;
  text-shadow: 0px 3px 6px #7ad3e0, 0px 3px 6px #81efff;
  &:hover {
    color: #81efff;
    transform: scale(1.05);
  }
`;
export const StyledSecondButton = styled(A)`
  color: #ffffff;
  border: 3px solid #ffffff;
  box-shadow: 0px 0px 6px #ffffff;
  text-shadow: 0px 3px 6px #aaa9a96c, 0px 3px 6px #ffffffbe;
  &:hover {
    color: #ffffff;
    transform: scale(1.05);
  }
`;

export const StyledThirdButton = styled(A)`
  color: #1ad177;
  border: 3px solid #1ad177;
  text-shadow: 0px 3px 6px #20ac67, 0px 3px 6px #1ad178;
  box-shadow: 0px 0px 6px #1dcc70;
  &:hover {
    color: #1ad177;
    transform: scale(1.05);
  }
`;
export const StyledFourthButton = styled(A)`
  color: #e740f0;
  border: 3px solid #e740f0;
  text-shadow: 0px 3px 6px rgb(158, 80, 162), 0px 3px 6px rgb(231, 64, 240);
  box-shadow: 0px 0px 6px #e740f0;
  &:hover {
    color: #e740f0;
    transform: scale(1.05);
  }
`;
export const StyledConnectButton = styled.div`
  text-align: center;
  margin-left: 50px;
  font-weight: 500;
  font-size: 16px;
  line-height: 36px;
  border-radius: 24px;
  cursor: pointer;
  min-width: 148px;
  /* max-width: 150px; */
  padding: 0 20px;
  transition: 0.2s;
  text-transform: uppercase;
  /* height: 41px; */
  color: #a5b6fc;
  border: 3px solid #6633ff;
  text-shadow: 0px 3px 6px #183095, 0px 3px 6px #3c62ff;
  box-shadow: 0px 0px 6px #7993ff;
  @media screen and (max-width: 1486px) {
    padding: 0 14px;
  }
  @media screen and (max-width: 1475px) {
    padding: 0;
    font-size: 14px;
  }
  @media screen and (min-width: 992px) and (max-width: 1310px) {
    font-weight: 500;
    font-size: 12px;
    line-height: 36px;
    min-width: 130px;
    padding: 0;
    margin-left: 30px;
  }
  @media (max-width: 991px) {
    min-width: 148px;
    margin-bottom: 22px;
    margin-left: 0;
  }
  @media (max-width: 414px) {
    min-width: 148px;
    margin-bottom: 50px;
    margin-left: 0;
  }
  &:hover {
    color: #a5b6fc;
    transform: scale(1.05);
  }
`;
export const StyledDropdown = styled(NavDropdown)`
  text-align: center;
  margin-left: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 36px;
  cursor: pointer;
  min-width: 148px;
  max-width: 150px;
  transition: 0.2s;
  /* height: 41px; */
  @media screen and (min-width: 992px) and (max-width: 1310px) {
    font-weight: 500;
    font-size: 12px;
    line-height: 36px;
    min-width: 116px;
  }
  @media (max-width: 991px) {
    min-width: 148px;
    margin-bottom: 22px;
    margin-left: 0;
  }
  @media (max-width: 414px) {
    min-width: 148px;
    margin-bottom: 50px;
    margin-left: 0;
  }
  .dropdown-toggle {
    padding: 0;
    color: #ffffff !important;
    &::after {
      vertical-align: 50%;
      margin-left: 8px;
      vertical-align: 0;
      border-top: 0.6em solid;
      border-right: 0.5em solid transparent;
      border-bottom: 0;
      border-left: 0.5em solid transparent;
    }
  }
  .dropdown-menu {
    margin-top: 12px;
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    width: 110%;
    min-width: unset;
    background: linear-gradient(to right, #322541, #442a5d, #322541);
    box-shadow: 0px 3px 24px #ffffff76;
    border: 8px solid #3a2e46;
    padding: 0.5rem 2px;
    .dropdown-divider {
      border-top: 1px solid rgba(255, 255, 255, 0.5);
    }
    .dropdown-item {
      padding: 0 0 0 12px;
      font-size: 14px;
      line-height: 24px;
      font-weight: 500;
      color: #ffffff;
      &:hover {
        opacity: 0.8;
        background-color: transparent;
      }
    }
  }
`;
export const StyledNav = styled(Nav)`
  justify-content: flex-end;
  align-items: center;
`;
export const StyledNavbarToggle = styled(Navbar.Toggle)`
  /* &:focus {
    outline: none;
    border: none;
  }
  & > .navbar-toggler-icon {
  } */
`;
export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 576px) {
    max-width: 195px;
    max-height: 53px;
  }
`;
export const StyledContainer = styled(Container)`
  height: 100%;
  max-width: 94%;
  @media screen and (min-width: 2440px) {
    max-width: 1868px;
  }
  @media screen and (max-width: 992px) {
    max-width: 100%;
    padding: 0;
    .navbar-brand {
      margin-left: 3%;
    }
    .navbar-toggler {
      margin-right: 3%;
    }
  }
  & > .navbar-toggler.collapsed {
    & > .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
  }
  & > .navbar-toggler {
    & > .navbar-toggler-icon {
      background-image: url(${close});
    }
  }
`;
export const StyledNavbar = styled(Navbar)`
  background-color: #000000;
  max-height: 102px;
  .navbar-toggler {
    border-radius: 8px;
    width: 35px;
    height: 35px;
    .navbar-toggler-icon {
      margin-left: -8px;
      width: 25px;
      height: 25px;
    }
  }
  .navbar-collapse {
    background-color: #000000;
    justify-content: flex-end;
    @media screen and (max-width: 991px) {
      margin-top: 16px;
      padding-bottom: 20px;
    }
  }
`;
export const Div = styled.div`
  .add-boxshadow {
    box-shadow: 0px 3px 6px #9e08a6;
  }
`;
