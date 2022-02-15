import { useState, useEffect } from 'react';
import Logo from 'app/assets/img/Logo/logo.png';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router';
import ModalConnectWallet from 'app/components/ModalConnect/index';
import { selectWallet } from 'app/components/Wallet/slice/selectors';
import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';
import { store } from 'index';
import { walletAction } from 'store/globalReducer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  StyledFirstButton,
  StyledSecondButton,
  StyledThirdButton,
  StyledFourthButton,
  StyledConnectButton,
  StyledDropdown,
  StyledNav,
  StyledNavbarToggle,
  StyledOnePageButton,
  StyledImg,
  StyledContainer,
  StyledNavbar,
  Div,
} from './style';
import UserAvatar from 'app/assets/img/user.png';
const Header = () => {
  const history = useHistory();
  const wallet: any = useSelector(selectWallet);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    return () => {};
  }, []);
  //logout
  const handleLogout = () => {
    store.dispatch(walletAction(null));
    localStorage.removeItem('StoreWallet');
    localStorage.removeItem('extensionName');
  };

  //open modal connect
  const [openConnect, setOpenConnect] = useState(false);

  const handleOpenConnect = () => {
    setOpenConnect(true);
  };
  const handleCloseConnect = () => {
    setOpenConnect(false);
  };

  const handleClose = () => {};
  return (
    <Div>
      <StyledNavbar
        className={scrolled && 'add-boxshadow'}
        collapseOnSelect
        fixed="top"
        expand="lg"
        variant="dark"
      >
        <StyledContainer>
          <Navbar.Brand href="#">
            <StyledImg
              src={Logo}
              alt="Logo"
              onClick={() => history.push('/')}
            />
          </Navbar.Brand>
          <StyledNavbarToggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <StyledNav>
              <StyledFirstButton
                href="https://docs.google.com/presentation/d/1RnP4BVUzkm8dxNpl9WijcnW4WF5uRqzt/present?slide=id.p1"
                target="_blank"
              >
                PITCH DECK
              </StyledFirstButton>
              <StyledOnePageButton
                href="https://drive.google.com/file/d/1POi_e0qvqcbkmnOBovydCOc66FAhMgij/view"
                target="_blank"
              >
                ONE PAGER
              </StyledOnePageButton>
              <StyledSecondButton
                href="https://drive.google.com/file/d/1QyeBB46XmXQnvmw9XfrK-vo39-qI68hU/view"
                target="_blank"
              >
                METAPAPER
              </StyledSecondButton>

              <StyledThirdButton href="#staking">STAKING</StyledThirdButton>
              <StyledFourthButton
                href="https://getstarted.gamestate.one"
                target="_blank"
              >
                GET STARTED
              </StyledFourthButton>
              {/* {!isEmpty(wallet.wallet) ? (
                <>
                  <StyledDropdown
                    id="basic-nav-dropdown"
                    title={
                      <>
                        <img
                          style={{ marginRight: '10px' }}
                          src={UserAvatar}
                          alt="user"
                        />
                        {wallet?.wallet?.currentAddress.slice(0, 5) +
                          '...' +
                          wallet?.wallet?.currentAddress.slice(
                            wallet?.wallet?.currentAddress.length - 4,
                          )}
                        <ArrowDropDownIcon />
                      </>
                    }
                  >
                    <NavDropdown.Item onClick={() => history.push('/order')}>
                      My Wallet
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout}>
                      Log Out
                    </NavDropdown.Item>
                  </StyledDropdown>
                </>
              ) : (
                <StyledConnectButton onClick={handleOpenConnect}>
                  Connect wallet
                </StyledConnectButton>
              )} */}
            </StyledNav>
          </Navbar.Collapse>
        </StyledContainer>
      </StyledNavbar>
      <ModalConnectWallet
        onClose={handleCloseConnect}
        isOpen={openConnect}
        handle={handleClose}
      />
    </Div>
  );
};
export default Header;
