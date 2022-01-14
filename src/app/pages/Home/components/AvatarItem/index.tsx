import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { ReactComponent as IconTwitter } from 'app/assets/img/Icons/icon_twitter.svg';
import { ReactComponent as IconLinkedIn } from 'app/assets/img/Icons/icon_linkedin.svg';

const StyledAvatar = styled.div<{ image: string }>`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 645px;
  border-radius: 8px;
  margin: 35px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transform: scale(1);
  transition: 0.2s ease-in-out;
  position: relative;
  &:hover {
    box-shadow: 0px 0px 8px #f8f8f8, 0px 0px 10px #db5289, 0px 0px 15px #e7e5ec,
      inset 0px 0px 5px #dadada;
    transform: scale(1.05);
  }
  &:hover .icons {
    display: flex;
    animation: fadeIn 0.4s;
  }
  @media screen and (max-width: 1660px) {
    margin: 8px 0;
  }
  @media screen and (max-width: 414px) {
    height: 265px;
    width: 93%;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const StyledCardInfo = styled(Card)<{ height: number }>`
  background: rgba(0, 0, 0, 0.2) 0% 0% no-repeat padding-box;
  /* min-height: 214px; */
  border-radius: 14px;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  width: 100%;
  margin: 0 12px 12px 12px;
  text-align: center;
  border: none;
  display: ${props => props.anonymous === 1 && 'none'};
  min-height: ${props => props.height}px;
`;
const StyledCardName = styled(Card.Title)`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0px;
  color: #ffffff;
  text-shadow: 0px 3px 6px #00000029;
  text-transform: uppercase;
  margin-bottom: auto;
  &.h5 {
    margin-bottom: 6px;
  }
`;
const StyledCardJob = styled(Card.Text)`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  @media screen and (max-width: 1791px) {
    min-height: 48px;
  }
  @media screen and (max-width: 1399px) {
    min-height: 0px;
  }
`;
const StyledCardDesc = styled(Card.Text)`
  text-align: center;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0px;
  color: #ededed;
  flex: 1;
  margin-bottom: auto;
`;
const StyledIcons = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  justify-content: space-evenly;
  height: 120px;
  flex-direction: column;
  display: none;
`;
const StyledIcon = styled.a`
  background: transparent;
  border-radius: 50%;
  border: 1px white solid;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  transition: 0.4s;

  svg {
    color: white;
    width: 100%;
  }
  &:hover {
    transform: scale(1.2);
  }
`;

interface AvatarItemInterface {
  src: string;
  name: string;
  job: string;
  desc: string;
  twitter?: string;
  linkedIn?: string;
}

const AvatarItem = ({
  item,
  anonymous,
}: {
  item: AvatarItemInterface;
  anonymous?: boolean;
}) => {
  const cards = document.querySelectorAll<HTMLElement>('.card-info');
  const heightCards = Array.from(cards).map(card => card?.offsetHeight);
  const heightCardMax = Math.max(...heightCards);
  return anonymous ? (
    <a href="#contact-form">
      <StyledAvatar image={item.src}>
        <StyledCardInfo
          border="primary"
          anonymous={anonymous ? 1 : 0}
          height={heightCardMax}
          className="card-info"
        >
          <Card.Body className="d-flex flex-column px-1">
            <StyledCardName dangerouslySetInnerHTML={{ __html: item.name }} />
            <StyledCardJob>{item.job}</StyledCardJob>
            <StyledCardDesc>{item.desc}</StyledCardDesc>
          </Card.Body>
        </StyledCardInfo>
      </StyledAvatar>
    </a>
  ) : (
    <StyledAvatar image={item.src}>
      <StyledIcons className="icons">
        <StyledIcon href={item.linkedIn} target="_blank">
          <IconLinkedIn />
        </StyledIcon>
        <StyledIcon href={item.twitter} target="_blank">
          <IconTwitter />
        </StyledIcon>
      </StyledIcons>
      <StyledCardInfo
        border="primary"
        anonymous={anonymous ? 1 : 0}
        height={heightCardMax}
        className="card-info"
      >
        <Card.Body className="d-flex flex-column px-1">
          <StyledCardName dangerouslySetInnerHTML={{ __html: item.name }} />
          <StyledCardJob>{item.job}</StyledCardJob>
          <StyledCardDesc>{item.desc}</StyledCardDesc>
        </Card.Body>
      </StyledCardInfo>
    </StyledAvatar>
  );
};

export default AvatarItem;
