import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LabelSection from '../LabelSection';
import extAdam from 'app/assets/img/Team/extAdam.png';
import extAnkur from 'app/assets/img/Team/extAnkur.png';
import extBrenn from 'app/assets/img/Team/extBrenn.png';
import extErik from 'app/assets/img/Team/extErik.png';
import extJacob from 'app/assets/img/Team/extJacob.png';
import extKhanh from 'app/assets/img/Team/extKhanh.png';
import extMarco from 'app/assets/img/Team/extMarco.png';
import extWilliam from 'app/assets/img/Team/extWilliam.png';
import mobileExtAdam from 'app/assets/img/Team/mobileExtAdam.png';
import mobileExtAnkur from 'app/assets/img/Team/mobileExtAnkur.png';
import mobileExtBrenn from 'app/assets/img/Team/mobileExtBrenn.png';
import mobileExtErik from 'app/assets/img/Team/mobileExtErik.png';
import mobileExtJacob from 'app/assets/img/Team/mobileExtJacob.png';
import mobileExtKhanh from 'app/assets/img/Team/mobileExtKhanh.png';
import mobileExtMarco from 'app/assets/img/Team/mobileExtMarco.png';
import mobileExtWilliam from 'app/assets/img/Team/mobileExtWilliam.png';
import AvatarItem from '../AvatarItem';
import styled from 'styled-components';
import AvatarItemMobile from '../AvatarItem/AvatarItemMobile';

const StyledItemCol = styled(Col)`
  padding: 0 15px;
  @media screen and (max-width: 1660px) {
    padding: 0 4px;
  }
  @media screen and (max-width: 414px) {
    width: 50%;
  }
`;
const StyledTeamRow = styled(Row)`
  @media screen and (max-width: 414px) {
    display: none;
  }
`;
const StyledMobileTeamRow = styled(Row)`
  @media screen and (max-width: 414px) {
    display: flex;
  }
  @media screen and (min-width: 415px) {
    display: none;
  }
`;

const StyledLabelSectionRow = styled(Row)`
  @media screen and (max-width: 415px) {
    display: none;
  }
`;
const StyledMobileLabelRow = styled(Row)`
  @media screen and (max-width: 414px) {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 45px;
    & span {
      font-size: 16px;
      line-height: 19px;
      font-weight: 700;
      letter-spacing: 0px;
      color: #ffffff;
      width: 100%;
    }
    & h3 {
      font-size: 32px;
      line-height: 36px;
      font-weight: bold;
      letter-spacing: 0px;
      color: #ffffff;
      width: 77%;
      margin-top: 10px;
    }
  }
  @media screen and (min-width: 415px) {
    display: none;
  }
`;
const EXTENDED_TEAM = [
  {
    src: extErik,
    srcMobile: mobileExtErik,
    name: 'ERIK CURRE',
    job: 'SPLINTERLANDS.COM | HIVE-ENGINE.COM',
    desc: 'University of Washington B.S.C. Banking industry developer turned code-slinger for Hive Engine smart contract DEX, and the popular Splinterlands digital trading card game.',
    twitter: undefined,
    linkedIn: 'https://www.linkedin.com/in/ecurre/',
  },
  {
    src: extAdam,
    srcMobile: mobileExtAdam,
    name: 'ADAM CHAPLIN',
    job: 'DEFIFORYOU.UK | DIGCHAIN.ORG',
    desc: 'CEO of DeFi For You, Dig Chain, and co-founder of Travala. Adam is a seasoned veteran with 30 years of business management experience.',
    twitter: undefined,
    linkedIn: 'https://www.linkedin.com/in/adamchristopherchaplin',
  },
  {
    src: extWilliam,
    srcMobile: mobileExtWilliam,
    name: 'WILLIAM GRAY',
    job: 'DEFIFORYOU.UK | DIGCHAIN.ORG',
    desc: 'Digital marketing expert and Chief Marketing Officer at DeFi For You and Dig Chain. William’s background includes copywriting, journalism and social media management.',
    twitter: undefined,
    linkedIn: 'https://www.linkedin.com/in/williamgraycmo',
  },
  {
    src: extJacob,
    srcMobile: mobileExtJacob,
    name: 'JACOB GADIKIAN',
    job: 'NOTIONAL | BLURT.BLOG',
    desc: 'Decentralised protocol developer since 2013, and a technical powerhouse in edge-of-network validation, blockchain interoperability, and open embedded systems design.',
    twitter: 'https://twitter.com/gadikian',
    linkedIn: 'https://www.linkedin.com/in/jacobgadikian/',
  },
  {
    src: extBrenn,
    srcMobile: mobileExtBrenn,
    name: 'BRENN HILL',
    job: 'NOTIONAL',
    desc: 'Engineering leader since 2009 focusing on media, sports, and marketing technology. In the blockchain space since 2015, Brenn is a published author with Packt on blockchain topics.',
    twitter: 'https://twitter.com/brennhill',
    linkedIn: 'https://www.linkedin.com/in/brennhill/',
  },
  {
    src: extKhanh,
    srcMobile: mobileExtKhanh,
    name: 'KHANH NGUYEN',
    job: 'NOTIONAL',
    desc: 'Khanh is a skilled blockchain engineer with deep expertise in cross-chain technology. He has a Bachelors in Computer Science from Hanoi University of Science and Technology.',
    twitter: undefined,
    linkedIn: undefined,
  },
  {
    src: extAnkur,
    srcMobile: mobileExtAnkur,
    name: 'ANKUR BANERJEE',
    job: 'CTO - CHEQD.IO',
    desc: 'Engineering and digital identity project leader. Software development innovator, and co-inventor on multiple patent-pending solutions in blockchain and artificial intelligence systems.',
    twitter: 'https://twitter.com/ankurb',
    linkedIn: 'https://www.linkedin.com/in/banerjeeankur/',
  },
  {
    src: extMarco,
    srcMobile: mobileExtMarco,
    name: "MARCO STAGLIANO'",
    job: 'ANOTHER-1.IO | SNEAKERHEADZ',
    desc: 'Digital fashion collectibles marketplace founder, experienced in Corporate Finance, M&A, Fintech, Real-estate, NFT’s and Metaverses. Developed business across Asia and Europe, and acted as head of operations for AngelVest.',
    twitter: undefined,
    linkedIn: 'https://www.linkedin.com/in/marco-staglian%C3%B2-50b4864/',
  },
];

const ExtendedTeam = () => {
  return (
    <Container>
      <StyledLabelSectionRow>
        <LabelSection
          label="EXTENDED TEAM / ADVISORS"
          note="MEET &nbsp;THE"
          className="mt-75"
        />
      </StyledLabelSectionRow>
      <StyledMobileLabelRow>
        <span>MEET &nbsp;THE</span>
        <h3>EXTENDED TEAM & ADVISORS</h3>
      </StyledMobileLabelRow>
      <StyledTeamRow>
        {EXTENDED_TEAM.map((item, idx) => (
          <StyledItemCol md={6} xxl={3} key={idx}>
            <AvatarItem item={item} />
          </StyledItemCol>
        ))}
      </StyledTeamRow>
      <StyledMobileTeamRow>
        {EXTENDED_TEAM.map((item, idx) => (
          <AvatarItemMobile item={item} key={idx} />
        ))}
      </StyledMobileTeamRow>
    </Container>
  );
};

export default ExtendedTeam;
