import React from "react"
import styled from "styled-components"
const StyledLabelCard = styled.span`
  background-color: ${(props) => props.color};
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  font-style: normal;
  font-weight: normal;
  padding: 8px 14px;
  border-radius: 9px;
  margin: 26px 0 16px 18px;
  display: inline-block;
`
const StyledCardItem = styled.div`
  max-width: 382px;
  background: #262626;
  border-radius: 15px;
  opacity: 1;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
`
const StyledContent = styled.ul`
  font-size: 24px;
  line-height: 28px;
  font-style: normal;
  font-weight: normal;
  color: #fff;
  text-align: left;
  padding-bottom: 24px;
`
const CardItem = ({ label, content, color, className }) => {
  return (
    <StyledCardItem className={className}>
      <StyledLabelCard color={color}>{label}</StyledLabelCard>
      <StyledContent>
        {content.map((item, idx) => (
          <li key={idx}>
            <span>{item}</span>
          </li>
        ))}
      </StyledContent>
    </StyledCardItem>
  )
}

export default CardItem