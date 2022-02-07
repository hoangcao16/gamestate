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
import logoNulltx from 'app/assets/img/Logo/logoNulltx.png';
import logoCryptomode from 'app/assets/img/Logo/logoCryptomode.png';
import logoNews from 'app/assets/img/Logo/logoNews.png';
import logoFab from 'app/assets/img/Logo/logoFab.png';
import logoGameX from 'app/assets/img/Logo/logoGameX.jpg';
import logoXhash from 'app/assets/img/Logo/logoXhash.png';
import logoConfluence from 'app/assets/img/Logo/logoConfluence.png';
import logoNya from 'app/assets/img/Logo/logoNya.png';
import logoRoad from 'app/assets/img/Logo/logoRoad.png';
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
    margin-bottom: 0;
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
  transition: 0.4s;
  &:hover {
    animation: shaking 0.3s linear;
    animation-iteration-count: 2;
    filter: grayscale(0.75) opacity(0.6);
  }
  @keyframes shaking {
    0% {
      transform: translateX(-3px) rotate(-2deg);
    }
    50% {
      transform: translateX(3px) rotate(2deg);
    }
    100% {
      transform: translateX(-3px) rotate(-2deg);
    }
  }
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
        right: '80',
      },
      {
        name: 'logoBirt',
        src: logoBirt,
        link: 'https://blurt.blog/blurt/@blurtofficial/blurt-a-world-of-possibilities',
        width: '215',
        height: '198',
        right: '80',
      },
      {
        name: 'logoNya',
        src: logoNya,
        link: 'https://www.nyaltx.com/token-bnb-new/?logoid=641',
        width: '215',
        height: '198',
        right: '80',
      },
      {
        name: 'logoConfluence',
        src: logoConfluence,
        link: undefined,
        width: '600',
        height: '',
        right: '0',
      },

      {
        name: 'logoXhash',
        src: logoXhash,
        link: 'https://www.xhashtag.io',
        width: '400',
        height: '198',
        right: '200',
      },
      {
        name: 'logoGameX',
        src: logoGameX,
        link: 'https://medium.com/@gamestate/gamestate-and-gamex-partner-to-take-blockchain-gaming-to-the-next-level-5ba9ea086c00',
        width: '350',
        height: '',
        right: '200',
      },
      {
        name: 'logoFab',
        src: logoFab,
        link: 'https://medium.com/@gamestate/gamestate-partners-with-fabwelt-to-unleash-an-integrated-metaverse-experience-c57190340bd',
        width: '500',
        height: '198',
        right: '0',
      },
      {
        name: 'logoRoad',
        src: logoRoad,
        link: 'https://corporateroadshow.com/profile/?logoid=8877',
        width: '500',
        height: '198',
        right: '100',
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
        height: '',
        right: '200',
      },
      {
        name: 'logoToday',
        src: logoToday,
        link: 'https://u.today/press-releases/gamestate-partners-with-splinterlands-to-bring-nfts-and-blockchain-gaming-to-the',
        width: '314',
        height: '',
        right: '200',
      },
      {
        name: 'logoMagazine',
        src: logoMagazine,
        link: 'https://blockchainmagazine.net/gamestate-partners-with-splinterlands-to-bring-nfts-and-blockchain-gaming-to-the-megaverse/',
        width: '314',
        height: '',
        right: '0',
      },
      {
        name: 'logoNulltx',
        src: logoNulltx,
        link: 'https://nulltx.com/cyberpunks-history-and-foundation-for-the-megaverse/',
        width: '314',
        height: '',
        right: '200',
      },
      {
        name: 'logoCryptomode',
        src: logoCryptomode,
        link: 'https://cryptomode.com/cyberpunks-history-and-foundation-for-the-megaverse/',
        width: '314',
        height: '',
        right: '200',
      },
    ],
  },
];
const Partners = () => {
  return (
    <Container>
      {PARTNERS.map((section: any, idx) => (
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
            {section.logos.map((logo: any, idx: number) =>
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
                  href={logo.link ? logo.link : undefined}
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
