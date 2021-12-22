import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import LabelSection from '../LabelSection';
import logoDig from 'app/assets/img/Logo/logoDig.svg';
import logoDefi from 'app/assets/img/Logo/logoDefi.svg';
import logoAnother from 'app/assets/img/Logo/logoAnother.svg';
import logoSplin from 'app/assets/img/Logo/logoSplin.svg';
import logoHive from 'app/assets/img/Logo/logoHive.svg';
import logoN from 'app/assets/img/Logo/logoN.svg';
import logoBirt from 'app/assets/img/Logo/logoBirt.svg';
import logoEdso from 'app/assets/img/Logo/logoEdso.svg';
import logoBlockchain from 'app/assets/img/Logo/logoDemo.svg';
import logoPolygon from 'app/assets/img/Logo/logoPolygon.svg';
import logoArweave from 'app/assets/img/Logo/logoArweave.svg';
import logoToday from 'app/assets/img/Logo/logoToday.svg';
import logoMagazine from 'app/assets/img/Logo/logoMagazine.svg';
import logoNews from 'app/assets/img/Logo/logoNews.png';
import { ReactComponent as LogoToday } from 'app/assets/img/Logo/logoToday.svg';

const StyledBlockLogo = styled(Row)<{ technology?: number }>`
  margin-bottom: 124px;
  ${props =>
    props.technology === 1
      ? `
    justify-content: space-evenly;
    width: 82%;
    margin: 0 auto;`
      : `
    justify-content: center; `}

  @media screen and (max-width: 1788px) {
    & a {
      margin: 30px 35px;
    }
  }
  @media screen and (max-width: 414px) {
    & a {
      margin-bottom: 100px;
    }
    & img {
      max-width: 100%;
    }
  }
`;

const StyledLogo = styled.img`
  height: 100%;
  width: 100%;
`;
const StyledLinkLogo = styled.a<{
  width: string;
  height: string;
  right?: string;
}>`
  max-width: ${props => props.width}px;
  max-height: ${props => props.height}px;
  margin-right: ${props => props.right}px;
  margin-bottom: 40px;
`;
const StyledBlockLogoPolygon = styled(Row)`
  justify-content: center;
  margin: 70px 0;
`;
const PARTNERS = [
  {
    label: 'synergy partners',
    technology: null,
    className: 'align-items-center flex-wrap mt-5 mb-124',
    logos: [
      {
        name: 'logoSplin',
        src: logoSplin,
        link: 'https://medium.com/@gamestate/gamestate-partners-with-splinterlands-to-bring-nfts-and-blockchain-gaming-to-the-megaverse-44f51c132c91',
        width: '260',
        height: '128',
        right: '150',
      },
      {
        name: 'logoDefi',
        src: logoDefi,
        link: 'https://defiforyou.uk/',
        width: '600',
        height: '128',
        right: '113',
      },
      {
        name: 'logoAnother',
        src: logoAnother,
        link: 'https://another-1.io/',
        width: '264',
        height: '210',
        right: '117',
      },
      {
        name: 'logoDig',
        src: logoDig,
        link: 'https://medium.com/@gamestate/gamestate-partners-with-dig-chain-to-bring-the-future-of-real-estate-tokenization-to-the-megaverse-b02bd0455749',
        width: '141',
        height: '141',
        right: '0',
      },
      {
        name: 'logoHive',
        src: logoHive,
        link: 'https://hive-engine.com/',
        width: '477',
        height: '76',
        right: '184',
      },
      {
        name: 'logoBirt',
        src: logoBirt,
        link: 'https://blurt.blog/blurt/@blurtofficial/blurt-a-world-of-possibilities',
        width: '215',
        height: '198',
        right: '0',
      },
    ],
  },
  {
    label: 'technology partners',
    technology: 1,
    className: 'align-items-center flex-wrap mt-5 mb-124',
    logos: [
      {
        name: 'logoBlockchain',
        src: logoBlockchain,
        link: 'https://blockchaindeveloper.asia/',
        width: '858',
        height: '186',
        right: '0',
      },
      {
        name: 'logoEdso',
        src: logoEdso,
        link: 'https://edsolabs.com/',
        width: '314',
        height: '54',
        right: '0',
      },
      {
        name: 'logoN',
        src: logoN,
        link: 'https://notional.ventures/',
        width: '306',
        height: '157',
        right: '0',
      },
      {
        name: 'logoArweave',
        src: logoArweave,
        link: 'https://www.arweave.org/',
        width: '314',
        height: '54',
        right: '0',
      },
      {
        name: 'logoPolygon',
        src: logoPolygon,
        link: 'https://polygon.technology/',
        width: '314',
        height: '54',
        right: '0',
      },
    ],
  },
  {
    label: 'in the media',
    className: 'mt-5 justify-content-evenly',
    logos: [
      {
        name: 'logoNews',
        src: logoNews,
        link: 'https://nftnewstoday.com/2021/11/27/cyberpunks-history-and-foundation-for-the-megaverse/',
        width: '314',
        height: '100',
        right: '40',
      },
      {
        name: 'logoToday',
        src: logoToday,
        link: 'https://u.today/press-releases/gamestate-partners-with-splinterlands-to-bring-nfts-and-blockchain-gaming-to-the',
        width: '314',
        height: '100',
        right: '40',
      },
      {
        name: 'logoMagazine',
        src: logoMagazine,
        link: 'https://blockchainmagazine.net/gamestate-partners-with-splinterlands-to-bring-nfts-and-blockchain-gaming-to-the-megaverse/',
        width: '314',
        height: '100',
        right: '40',
      },
    ],
  },
];
const Partners = () => {
  return (
    <Container>
      {/* section one */}
      {PARTNERS.map((section, idx) => (
        <div key={idx}>
          <Row>
            <LabelSection
              label={section.label}
              topAuto="mt-auto"
              className="text-uppercase"
            />
          </Row>
          <StyledBlockLogo
            className={section.className}
            technology={section.technology}
          >
            {section.logos.map((logo, idx) =>
              logo.name === 'logoPolygon' ? (
                <StyledBlockLogoPolygon key={idx}>
                  <StyledLinkLogo
                    href="https://polygon.technology/"
                    rel="nofollow"
                    target="_blank"
                    width={logo.width}
                    height={logo.height}
                  >
                    <StyledLogo src={logo.src} />
                  </StyledLinkLogo>
                </StyledBlockLogoPolygon>
              ) : (
                <StyledLinkLogo
                  key={idx}
                  href={logo.link}
                  rel="nofollow"
                  target="_blank"
                  width={logo.width}
                  height={logo.height}
                  right={logo.right}
                >
                  {logo.name === 'logoToday' && (
                    <LogoToday className="d-none" />
                  )}
                  <StyledLogo src={logo.src} />
                </StyledLinkLogo>
              ),
            )}
          </StyledBlockLogo>
        </div>
      ))}
    </Container>
  );
};

export default Partners;
