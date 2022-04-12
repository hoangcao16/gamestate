import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LabelSection from '../LabelSection';
import coreCong from 'app/assets/img/Team/coreCong.png';
// import coreKobus from "../../assets/img/Team/coreKobus.png"
import coreLocke from 'app/assets/img/Team/coreLocke.png';
import corePeter from 'app/assets/img/Team/corePeter.png';
import coreRicardo from 'app/assets/img/Team/coreRicardo.png';
import coreSang from 'app/assets/img/Team/coreSang.png';
import coreTung from 'app/assets/img/Team/coreTung.png';
import coreViet from 'app/assets/img/Team/coreViet.png';
import coreManne from 'app/assets/img/Team/coreManne.png';
import corePeck from 'app/assets/img/Team/corePeck.png';
import coreMartinez from 'app/assets/img/Team/coreMartinez.png';
// import coreTien from 'app/assets/img/Team/coreTien.png';
import coreEdde from 'app/assets/img/Team/coreEdde.png';
import coreToni from 'app/assets/img/Team/coreToni.png';
import mobileCoreCong from 'app/assets/img/Team/mobileCoreCong.png';
// import mobileCoreKobus from "../../assets/img/Team/mobileCoreKobus.png"
import mobileCoreLocke from 'app/assets/img/Team/mobileCoreLocke.png';
import mobileCorePeter from 'app/assets/img/Team/mobileCorePeter.png';
import mobileCoreRicardo from 'app/assets/img/Team/mobileCoreRicardo.png';
import mobileCoreSang from 'app/assets/img/Team/mobileCoreSang.png';
import mobileCoreTung from 'app/assets/img/Team/mobileCoreTung.png';
import mobileCoreViet from 'app/assets/img/Team/mobileCoreViet.png';
import mobileCoreManne from 'app/assets/img/Team/mobileCoreManne.png';
import mobileCorePeck from 'app/assets/img/Team/mobileCorePeck.png';
// import mobileCoreTien from 'app/assets/img/Team/mobileCoreTien.png';
import mobileCoreEdde from 'app/assets/img/Team/mobileCoreEdde.png';
import mobileCoreToni from 'app/assets/img/Team/mobileCoreToni.png';

// import mobileCoreMartinez from "../../assets/img/Team/mobileCoreMartinez.png"
// import anonymous from 'app/assets/img/Team/anonymous.png';
import AvatarItem from '../AvatarItem';
import team from 'app/assets/img/Team/team.png';
import styled from 'styled-components';
import AvatarItemMobile from '../AvatarItem/AvatarItemMobile';

const StyledItemCol = styled(Col)`
  padding: 0 15px;
  @media screen and (max-width: 1660px) {
    padding: 0 4px;
  }
`;
const StyledBlockCoreTeam = styled.div`
  width: 100%;
  background: url(${team}),
    transparent linear-gradient(128deg, #163f8c 0%, #8f65be 48%, #e740f0 100%)
      0% 0% no-repeat padding-box;
  background-repeat: no-repeat;
  background-position: right top;
  @media screen and (max-width: 991px) {
    background: transparent
      linear-gradient(128deg, #163f8c 0%, #8f65be 48%, #e740f0 100%) 0% 0%
      no-repeat padding-box;
    & span {
      margin-right: auto;
      margin-left: auto;
    }
    & .row:first-child div:first-child {
      min-height: 0;
      margin-left: 0;
      margin-top: 6px;
    }
  }
  @media screen and (max-width: 414px) {
    & span:first-child {
      font-size: 16px;
      line-height: 19px;
      font-weight: 700;
    }
    & span:last-child {
      font-size: 32px;
      line-height: 38px;
    }
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

const CORE_TEAM = [
  {
    src: coreRicardo,
    srcMobile: mobileCoreRicardo,
    name: 'RICARDO FERREIRA',
    job: 'CO-FOUNDER & TECHNICAL DIRECTOR',
    desc: 'Bachelor of Commerce thought leader, with wide entrepreneurial and business development experience in real estate, manufacturing, information technology, fintech, and blockchain social media sectors.',
    twitter: 'https://twitter.com/TheCryptoDrive',
    linkedIn: 'https://www.linkedin.com/in/ferreira-ricardo/',
  },
  {
    src: corePeter,
    srcMobile: mobileCorePeter,
    name: 'PETER HJORTSOE',
    job: 'CO-FOUNDER',
    desc: 'M.Sc. International Business. Professional experience in real estate, FMCG, retail, renewable energy & finance. Serial entrepreneur, building and scaling businesses in Asia since 2014.',
    twitter: 'https://twitter.com/deerlakep',
    linkedIn: 'https://www.linkedin.com/in/peter-hjortsoe/',
  },
  {
    src: coreLocke,
    srcMobile: mobileCoreLocke,
    name: 'LOCKE KOSNOFF',
    job: 'CO-FOUNDER & MARKETING DIRECTOR',
    desc: 'BBA and PGCEi graduate, experienced in the fields of blockchain marketing, project management, communications, and advisory in various fintech start-ups.',
    twitter: undefined,
    linkedIn: 'https://www.linkedin.com/in/lockekosnoff',
  },
  // {
  //   src: coreKobus,
  //   name: "KOBUS KOTZE",
  //   job: "CREATIVE LEAD"//
  //   desc: "12 Years’ experience in broadcasting, branding, marketing, and strategy. Literary Theory and Writing graduate; currently a brand advisor to Bundesliga, Netflix, Discovery, and other major players.",
  // twitter: '',
  // linkedIn: ''
  // },
  {
    src: corePeck,
    srcMobile: mobileCorePeck,
    name: 'Sean Peck',
    job: 'Business Development Director',
    desc: 'MBA. Finance & Human Resources, BA. Biz Management. Experienced in manufacturing management, startups, valuations, mergers, acquisitions, project management, scaling, and strategic management.',
    twitter: 'https://twitter.com/SeanSunset',
    linkedIn: 'https://www.linkedin.com/in/seanpeck',
  },
  {
    src: coreCong,
    srcMobile: mobileCoreCong,
    name: 'CONG NGUYEN',
    job: 'CEO - BLOCKCHAIN DEVELOPER ASIA',
    desc: 'An experienced leader in modern technological innovation. Developed the DeFi For You platform and several ongoing blockchain projects for the Vietnamese government, banks, and local industries.',
    twitter: undefined,
    linkedIn: 'https://www.linkedin.com/in/cong-nguyen-b5b274102/',
  },
  {
    src: coreTung,
    srcMobile: mobileCoreTung,
    name: 'TUNG DUONG THANH',
    job: 'DEV. LEAD - BLOCKCHAIN DEVELOPER ASIA',
    desc: 'Project manager in multiple blockchain engineering teams, most recently, Travala and Defi For You. Tung is a leading-edge developer; constantly pushing the boundaries of modern technology.',
    twitter: undefined,
    linkedIn:
      'https://www.linkedin.com/in/d%C6%B0%C6%A1ng-thanh-t%C3%B9ng-845aa764/',
  },
  {
    src: coreViet,
    srcMobile: mobileCoreViet,
    name: `VIET TUAN VU`,
    job: 'VR GAME SPECIALIST',
    desc: '18 years’ experience in the fields of telecommunications and IT. More than 5 years involved in collaborating and providing AR/VR solutions to a wide range of industries.',
    twitter: undefined,
    linkedIn: undefined,
  },
  {
    src: coreSang,
    srcMobile: mobileCoreSang,
    name: 'SANG THE DUONG',
    job: '3D DESIGNER',
    desc: 'More than 5 years’ experience designing for various AR/VR applications, ranging from games, simulation, travel, and education.',
    twitter: undefined,
    linkedIn: undefined,
  },
  {
    src: coreEdde,
    srcMobile: mobileCoreEdde,
    name: 'Thomas Edde',
    job: 'Operations & Strategy',
    desc: 'Bsc. International Management, specialized as project manager, business analyst, business consultant, operations management, at IBM, Kyndryl, and Kepler DAO process Improvement, automation, and standardisation.',
    twitter: undefined,
    linkedIn: undefined,
  },
  {
    src: coreToni,
    srcMobile: mobileCoreToni,
    name: 'Toni Cristian Tanase',
    job: 'Concept Manager',
    desc: 'Masters in Architecture, Project Manager in pharmaceutical planning and development both in Germany and Switzerland since 2014, member of the Chamber of Architects in Germany and Switzerland.',
    twitter: undefined,
    linkedIn: undefined,
  },
  {
    src: coreManne,
    srcMobile: mobileCoreManne,
    name: 'Rycharde Manne',
    job: 'Metanomics Architect',
    desc: 'Published mathematics author, Oxford educated cryptonomics researcher, extensively proficient in stress testing algorithmic optimisations, designing and managing DeFi investments.',
    twitter: undefined,
    linkedIn: undefined,
  },

  {
    src: coreMartinez,
    srcMobile: coreMartinez,
    name: 'Licarmen Martinez',
    job: 'Synergy Alliances',
    desc: 'PhD. Management Science, skilled in industrial relations, managing agile tools in blockchain teams and communities, international speaker, organizer of international virtual events.',
    twitter: 'https://twitter.com/lmartinezmdl',
    linkedIn: 'https://www.linkedin.com/in/licarmen-mart%C3%ADnez-21122861/',
  },

  // {
  //   src: anonymous,
  //   srcMobile: anonymous,
  //   name: "",
  //   job: "",
  //   desc: "",
  //   twitter: "",
  //   linkedIn: "",
  // },
];

const CoreTeam = () => {
  return (
    <StyledBlockCoreTeam>
      <Container>
        <Row>
          <LabelSection
            label="CORE TEAM"
            note="MEET &nbsp;THE"
            className="mt-120"
            before
          />
        </Row>
        <StyledTeamRow>
          {CORE_TEAM.map((item, idx) => (
            <StyledItemCol md={6} xxl={3} key={idx}>
              {/* <AvatarItem item={item} /> */}
              <AvatarItem item={item} anonymous={idx === 12} />
            </StyledItemCol>
          ))}
        </StyledTeamRow>
        <StyledMobileTeamRow>
          {CORE_TEAM.map((item, idx) => (
            <AvatarItemMobile item={item} key={idx} />
          ))}
        </StyledMobileTeamRow>
      </Container>
    </StyledBlockCoreTeam>
  );
};

export default CoreTeam;
