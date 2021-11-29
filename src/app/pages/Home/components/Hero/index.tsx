import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import HeroVideo from 'app/assets/videos/herovideo.mp4';
import { ThreeHorseLoading } from 'react-loadingg';
import Loading from '../Loading';
const StyledLoadingProgress = styled(Loading)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #000;
  padding: 10px;
  border-radius: 10px;
`;
const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   return () => {
  //     setIsLoading(true);
  //   };
  // }, []);
  console.log('time', isLoading);

  return (
    <Div>
      {isLoading && <StyledLoadingProgress done={100} />}
      <video
        width="100%"
        height="80%"
        autoPlay={false}
        loop
        muted
        playsInline
        preload="auto"
        onLoadStart={() => {
          setIsLoading(true);
        }}
        onCanPlay={() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
        }}
      >
        <source
          src="https://s3.ap-southeast-1.amazonaws.com/defiforyou.uk/Logo_Effect_VS1.mp4"
          type="video/mp4"
        />
      </video>
    </Div>
  );
};
export default Hero;

const Div = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  background-color: #05080a;
  @media screen and (max-width: 991px) {
    padding-bottom: 30px;
  }
`;
