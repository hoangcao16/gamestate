import styled from 'styled-components';
import { StyledButton } from '../../Igos';

const StyledItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledImage = styled.img`
  /* object-fit: cover; */
  width: 100%;
  height: 436px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px #f8f8f8, 0px 0px 24px #db5289, 0px 0px 15px #e7e5ec,
    inset 0px 0px 5px #dadada;
  transition: 0.2s;
  &:hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 576px) {
    height: 246px;
  }
`;
const StyledTitle = styled.a`
  color: white;
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  flex: 1;
  margin-top: 20px;
  transition: 0.2s;
  &:hover {
    color: #d1d1d4e2;
  }
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;
const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: block;
  width: 100%;
`;
const StyledButtonRead = styled(StyledButton)`
  text-align: center;
  margin-top: 60px;
  margin-bottom: 60px;
  transition: 0.2s;
  &:hover {
    background: #ffffffed;
    border: 2px black solid;
  }
  &:hover a {
    color: black;
  }
  @media screen and (max-width: 576px) {
    margin-top: 20px;
  }
`;
interface MediaItemProps {
  item: {
    name: string;
    url: string;
    title: string;
    link: string;
  };
}
const MediaItem = ({ item }: MediaItemProps) => {
  return (
    <StyledItem>
      <StyledLink href={item.link} target="_blank">
        <StyledImage src={item.url} />
      </StyledLink>
      <StyledTitle href={item.link} target="_blank">
        {item.title}
      </StyledTitle>
      <StyledButtonRead>
        <StyledLink href={item.link} target="_blank">
          Read more
        </StyledLink>
      </StyledButtonRead>
    </StyledItem>
  );
};
export default MediaItem;
