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
`;
const StyledBlockLogoPolygon = styled(Row)`
  justify-content: center;
  margin: 70px 0;
`;
const Partners = () => {
  return (
    <Container>
      {/* section one */}
      <Row>
        <LabelSection label="SYNERGY PARTNERS" topAuto="mt-auto" />
      </Row>
      <StyledBlockLogo className="align-items-center flex-wrap mt-5 mb-124">
        <StyledLinkLogo
          href="https://medium.com/@gamestate/gamestate-partners-with-splinterlands-to-bring-nfts-and-blockchain-gaming-to-the-megaverse-44f51c132c91"
          rel="nofollow"
          target="_blank"
          width="260"
          height="128"
          right="150"
        >
          <StyledLogo src={logoSplin} />
        </StyledLinkLogo>
        <StyledLinkLogo
          href="https://defiforyou.uk/"
          rel="nofollow"
          target="_blank"
          width="600"
          height="128"
          right="113"
        >
          <StyledLogo src={logoDefi} />
        </StyledLinkLogo>
        <StyledLinkLogo
          href="https://another-1.io/"
          rel="nofollow"
          target="_blank"
          width="264"
          height="210"
          right="117"
        >
          <StyledLogo src={logoAnother} />
        </StyledLinkLogo>
        <StyledLinkLogo
          href="https://medium.com/@gamestate/gamestate-partners-with-dig-chain-to-bring-the-future-of-real-estate-tokenization-to-the-megaverse-b02bd0455749"
          rel="nofollow"
          target="_blank"
          width="141"
          height="141"
          right="0"
        >
          <StyledLogo src={logoDig} />
        </StyledLinkLogo>
        <StyledLinkLogo
          href="https://hive-engine.com/"
          rel="nofollow"
          target="_blank"
          width="477"
          height="76"
          right="184"
        >
          <StyledLogo src={logoHive} />
        </StyledLinkLogo>
        <StyledLinkLogo
          href="https://blurt.blog/blurt/@blurtofficial/blurt-a-world-of-possibilities"
          rel="nofollow"
          target="_blank"
          width="215"
          height="198"
          className="mt-5"
        >
          <StyledLogo src={logoBirt} />
        </StyledLinkLogo>
      </StyledBlockLogo>
      {/* section two */}
      <Row>
        <LabelSection label="TECHNOLOGY PARTNERS" topAuto="mt-auto" />
      </Row>
      <StyledBlockLogo
        className="align-items-center flex-wrap mt-5 mb-124"
        technology={1}
      >
        <StyledLinkLogo
          href="https://blockchaindeveloper.asia/"
          rel="nofollow"
          target="_blank"
          width="858"
          height="186"
        >
          <StyledLogo src={logoBlockchain} />
        </StyledLinkLogo>
        <StyledLinkLogo
          href="https://edsolabs.com/"
          rel="nofollow"
          target="_blank"
          width="314"
          height="54"
        >
          <StyledLogo src={logoEdso} />
        </StyledLinkLogo>
        <StyledLinkLogo
          href="https://notional.ventures/"
          rel="nofollow"
          target="_blank"
          width="306"
          height="157"
        >
          <StyledLogo src={logoN} />
        </StyledLinkLogo>

        <StyledLinkLogo
          href="https://www.arweave.org/"
          rel="nofollow"
          target="_blank"
          width="314"
          height="54"
        >
          <StyledLogo src={logoArweave} />
        </StyledLinkLogo>
        <StyledBlockLogoPolygon>
          <StyledLinkLogo
            href="https://polygon.technology/"
            rel="nofollow"
            target="_blank"
            width="314"
            height="54"
          >
            <StyledLogo width="314" height="54" src={logoPolygon} />
          </StyledLinkLogo>
        </StyledBlockLogoPolygon>
      </StyledBlockLogo>
      {/* section three */}
      <Row>
        <LabelSection label="IN THE MEDIA" topAuto="mt-auto" />
      </Row>
      <StyledBlockLogo className="mt-5">
        <StyledLinkLogo
          href="https://nftnewstoday.com/2021/11/27/cyberpunks-history-and-foundation-for-the-megaverse/"
          rel="nofollow"
          target="_blank"
          width="314"
          height="100"
          right="40"
        >
          <StyledLogo src={logoNews} />
        </StyledLinkLogo>
        <StyledLinkLogo
          href="https://u.today/press-releases/gamestate-partners-with-splinterlands-to-bring-nfts-and-blockchain-gaming-to-the"
          rel="nofollow"
          target="_blank"
          width="314"
          height="100"
          right="40"
        >
          <LogoToday className="d-none" />
          <StyledLogo src={logoToday} />
        </StyledLinkLogo>
        <StyledLinkLogo
          href="https://blockchainmagazine.net/gamestate-partners-with-splinterlands-to-bring-nfts-and-blockchain-gaming-to-the-megaverse/"
          rel="nofollow"
          target="_blank"
          width="300"
          height="100"
          right="40"
        >
          <StyledLogo src={logoMagazine} />
        </StyledLinkLogo>
      </StyledBlockLogo>
    </Container>
  );
};

export default Partners;
