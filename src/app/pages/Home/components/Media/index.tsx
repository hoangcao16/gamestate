import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import MediaItem from './MediaItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import news from 'app/assets/img/Media/news.jpg';
import uToday from 'app/assets/img/Media/uToday.png';
import { ReactComponent as IconLeft } from 'app/assets/img/Icons/icon_left.svg';
import { ReactComponent as IconRight } from 'app/assets/img/Icons/icon_right.svg';

import styled from 'styled-components';
const DATA = [
  {
    name: 'logoNews',
    url: news,
    title: 'Cyberpunks – History and Foundation for the Megaverse',
    link: 'https://nftnewstoday.com/2021/11/27/cyberpunks-history-and-foundation-for-the-megaverse/',
  },
  {
    name: 'logoToday',
    url: uToday,
    title:
      'Gamestate Partners with Splinterlands to Bring NFTs and Blockchain Gaming to the Megaverse',
    link: 'https://u.today/press-releases/gamestate-partners-with-splinterlands-to-bring-nfts-and-blockchain-gaming-to-the',
  },
];
const StyledSlider = styled(Row)`
  margin: 100px auto;
  width: 94%;
  & .slick-list,
  & .slick-track,
  & .slick-slide,
  & .slick-slide > div {
    display: flex;
  }
  & .slick-slide > div {
    width: 100%;
  }
  & .slick-slide {
    padding: 0 20px;
  }
  & .slick-dots li button:before {
    color: white;
  }

  & .slick-arrow {
    top: 35%;
    @media screen and (max-width: 576px) {
      top: 25%;
    }
  }
  & .slick-arrow:before {
    display: none !important;
  }
`;
const StyledIconButton = styled.div``;
const StyledIconLeft = styled(IconLeft)`
  color: white;
`;
const StyledIconRight = styled(IconRight)`
  color: white;
`;
const Media = () => {
  const settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: (
      <StyledIconButton>
        <StyledIconRight />
      </StyledIconButton>
    ),
    prevArrow: (
      <StyledIconButton>
        <StyledIconLeft />
      </StyledIconButton>
    ),
    responsive: [
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     slidesToShow: 2,
      //   },
      // },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <StyledSlider>
        <Col>
          <Slider {...settings}>
            {DATA.map((item, idx) => (
              <MediaItem item={item} key={idx} />
            ))}
          </Slider>
        </Col>
      </StyledSlider>
    </Container>
  );
};

export default Media;
