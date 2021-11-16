import { Container, Row } from "react-bootstrap"
import styled from "styled-components"
import LabelSection from "../LabelSection"
import logoDig from "../../assets/img/Logo/logoDig.svg"
import logoDefi from "../../assets/img/Logo/logoDefi.svg"
import logoAnother from "../../assets/img/Logo/logoAnother.svg"
import logoSplin from "../../assets/img/Logo/logoSplin.svg"
import logoHive from "../../assets/img/Logo/logoHive.svg"
import logoN from "../../assets/img/Logo/logoN.svg"
import logoVR from "../../assets/img/Logo/logoVR.svg"
import logoBirt from "../../assets/img/Logo/logoBirt.svg"
import logoBlockchain from "../../assets/img/Logo/logoBlockchain.svg"
import logoEdso from "../../assets/img/Logo/logoEdso.svg"

const StyledBlockLogo = styled(Row)`
  margin-bottom: 124px;
`

const StyledLogo = styled.img`
  max-width: ${(props) => props.width}px;
  max-height: ${(props) => props.height}px;
  margin-right: ${(props) => props.right}px;
`
const Partners = () => {
  return (
    <Container>
      <Row>
        <LabelSection label="SYNERGY PARTNERS" />
      </Row>
      <StyledBlockLogo className="align-items-center flex-wrap mt-5 mb-124">
        <StyledLogo width="141" height="141" src={logoDig} right="234" />
        <StyledLogo width="600" height="128" src={logoDefi} right="113" />
        <StyledLogo width="264" height="264" src={logoAnother} right="117" />
        <StyledLogo width="260" height="128" src={logoSplin} right="60" />
        <StyledLogo width="477" height="76" src={logoHive} right="184" />
        <StyledLogo width="306" height="157" src={logoN} right="160" />
        <StyledLogo width="197" height="197" src={logoVR} right="170" />
        <StyledLogo width="215" height="198" src={logoBirt} />
        <StyledLogo width="858" height="186" src={logoBlockchain} right="165" />
        <StyledLogo width="314" height="54" src={logoEdso} />
      </StyledBlockLogo>
    </Container>
  )
}

export default Partners
