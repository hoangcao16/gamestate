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
import {
  StyledFirstButton,
  StyledSecondButton,
  StyledThirdButton,
  StyledFourthButton,
  StyledConnectButton,
  StyledDropdown,
  StyledNav,
  StyledNavbarToggle,
  StyledImg,
  StyledContainer,
  StyledNavbar,
  Div,
} from './style';
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
              <StyledSecondButton
                href="https://s3.ap-southeast-1.amazonaws.com/defiforyou.uk/Gamestate-Meta-Paper-v1.pdf"
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
              {!isEmpty(wallet.wallet) ? (
                <StyledDropdown
                  id="basic-nav-dropdown"
                  title={
                    wallet?.wallet?.currentAddress.slice(0, 5) +
                    '...' +
                    wallet?.wallet?.currentAddress.slice(
                      wallet?.wallet?.currentAddress.length - 4,
                    )
                  }
                >
                  {/* <Dropdown.Toggle id="dropdown-basic">
                    {wallet?.wallet?.currentAddress.slice(0, 5) +
                      '...' +
                      wallet?.wallet?.currentAddress.slice(
                        wallet?.wallet?.currentAddress.length - 4,
                      )}
                  </Dropdown.Toggle> */}
                  {/* <Dropdown.Menu> */}
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                  {/* </Dropdown.Menu> */}
                </StyledDropdown>
              ) : (
                <StyledConnectButton onClick={handleOpenConnect}>
                  Connect
                </StyledConnectButton>
              )}
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
