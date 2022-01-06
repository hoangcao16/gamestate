import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconTwitter } from 'app/assets/img/Icons/icon_twitter.svg';
import { ReactComponent as IconLinedIn } from 'app/assets/img/Icons/icon_linkedin.svg';
const StyledItemColMobile = styled.div`
  padding: 0px 6px 0px;
  width: 50%;
  margin-top: 28px;
  position: relative;
`;
const StyledItemImage = styled.div<{ image: string }>`
  background-image: url(${props => props.image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 265px;
  border-radius: 8px;
`;
const StyledItemName = styled.h5`
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  letter-spacing: 0px;
  color: #ffffff;
  text-shadow: 0px 3px 6px #00000029;
  margin-top: 12px;
  text-transform: uppercase;
`;
const StyledItemJob = styled.span`
  font-size: 14px;
  line-height: 20px;
  min-height: 40px;
  letter-spacing: 0px;
  color: #ffffff;
  display: inline-block;
  margin-top: 3px;
  width: 190px;
  text-transform: uppercase;
`;
const StyledItemDesc = styled.p`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0px;
  color: #ededed;
  flex: 1;
  margin-top: 8px;
`;
const StyledIcons = styled.div`
  position: absolute;
  top: 0px;
  right: 12px;
  display: flex;
  justify-content: space-evenly;
  height: 60px;
  flex-direction: column;
`;
const StyledIcon = styled.a`
  background: transparent;
  border-radius: 50%;
  border: 1px white solid;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  transition: 0.4s;
  svg {
    color: white;
    width: 100%;
  }
`;
interface AvatarItemMobileProps {
  item: {
    image: string;
    name: string;
    job: string;
    desc: string;
  };
}
const AvatarItemMobile = ({ item }: AvatarItemMobileProps) => {
  return item.name === '' ? (
    <StyledItemColMobile>
      <a href="#contact-form">
        <StyledItemImage image={item.image} />
        <StyledItemName>{item.name}</StyledItemName>
        <StyledItemJob>{item.job}</StyledItemJob>
        <StyledItemDesc>{item.desc}</StyledItemDesc>
      </a>
    </StyledItemColMobile>
  ) : (
    <StyledItemColMobile>
      <StyledItemImage image={item.image} />
      <StyledIcons className="icons">
        <StyledIcon>
          <IconLinedIn />
        </StyledIcon>
        <StyledIcon>
          <IconTwitter />
        </StyledIcon>
      </StyledIcons>
      <StyledItemName>{item.name}</StyledItemName>
      <StyledItemJob>{item.job}</StyledItemJob>
      <StyledItemDesc>{item.desc}</StyledItemDesc>
    </StyledItemColMobile>
  );
};

export default AvatarItemMobile;
